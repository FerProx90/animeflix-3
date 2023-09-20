import "./styles.css";
import Form from "../../components/form/Form";
import Button from "../../components/button/Button";
import useUser from "../../hooks/UseUser";
import { useState } from "react";
import { v4 as uuid } from "uuid";
import { RiDeleteBin5Line } from "react-icons/ri";
import { TbEdit } from "react-icons/tb";
import Modal from "../../components/modal/Modal";

function CategoryForm() {
  const { categories, setCategories } = useUser();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [color, setColor] = useState("#CE1C1C");
  const [isNotValidName, setIsNotValidName] = useState(false);
  const [isNotValidColor, setIsNotValidColor] = useState(false);
  const [isDataSaved, setIsDataSaved] = useState(false);
  const [id, setId] = useState();
  const [isOpenModal, setIsOpenModal] = useState(false);

  const categoriesFormData = [
    {
      id: 1,
      placehold: "Categoria",
      required: "required",
      inputValue: name,
      setData: setName,
      valid: isNotValidName ? "Categoria ya existe o no valida" : undefined,
    },
    {
      id: 2,
      placehold: "Descripcion",
      required: "required",
      inputType: "textarea",
      inputValue: description,
      setData: setDescription,
    },
    {
      id: 3,
      inputType: "color",
      placehold: "color",
      required: "required",
      inputValue: color,
      setData: setColor,
      valid: isNotValidColor ? "Color ya existe" : undefined,
    },
  ];

  const resetInputs = () => {
    setName("");
    setColor("#CE1C1C");
    setDescription("");
    setId(undefined);
  };

  const handleEdit = () => {
    const newData = categories.map((cat) => {
      if (cat.id === id) {
        cat.name = name;
        cat.description = description;
        cat.color = color;
      }
      return cat;
    });

    setCategories(newData);

    setIsDataSaved(true);
    resetInputs();
    setTimeout(() => {
      setIsDataSaved(false);
    }, 2000);
  };

  const handleDelete = () => {
    const newData = categories.filter((cat) => cat.id !== id);

    setCategories(newData);
    setIsOpenModal(false);
  };

  const handleSubmit = async () => {
    const validName = categories.some(
      (cat) => cat.name?.toLowerCase() === name?.toLowerCase()
    );

    const validColor = categories.some((cat) => cat.color === color);

    setIsNotValidName(validName);
    setIsNotValidColor(validColor);

    if (validColor === true || validName === true) return;
    else {
      setCategories((prev) => [
        ...prev,
        {
          id: uuid(),
          name,
          description,
          color,
        },
      ]);

      setIsDataSaved(true);
      resetInputs();
      setTimeout(() => {
        setIsDataSaved(false);
      }, 2000);
    }
  };

  const CategoriesTable = ({ categoriesData }) => {
    return (
      <table>
        <thead>
          <tr>
            <th>Categoria</th>
            <th>descripcion</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {categoriesData.length === 0 ? (
            <>
              <td colSpan={3} className="td-empty">
                <h3>No hay categorias que mostrar por el momento</h3>
              </td>
            </>
          ) : (
            categoriesData.map((cat) => (
              <tr key={cat.id}>
                <td>{cat.name}</td>
                <td>{cat.description}</td>
                <td className="category_table-actions">
                  <div
                    onClick={() => {
                      setColor(cat.color);
                      setName(cat.name);
                      setDescription(cat.description);
                      setId(cat.id);
                    }}
                  >
                    <TbEdit />
                  </div>
                  <div
                    onClick={() => {
                      setId(cat.id);
                      setIsOpenModal(true);
                    }}
                  >
                    <RiDeleteBin5Line />
                  </div>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    );
  };

  return (
    <div className="container form-serie_container">
      <div className="form-serie_card form_category">
        <h2>Nueva Categoria</h2>
        <div className="form-serie_form form_category-form">
          {isDataSaved && (
            <span className="form-succes">Categoria Guardada</span>
          )}
          <Form
            formType={categoriesFormData}
            textButton={"Guardar"}
            submitEvent={id === undefined ? handleSubmit : handleEdit}
            customFormInput={"serie-form"}
          />
          <Button
            text={"Limpiar"}
            comesFromForm={true}
            customButton={"form-restart"}
            onClickEvent={resetInputs}
          />
        </div>
        <div className="table_container">
          <CategoriesTable categoriesData={categories} />
        </div>
      </div>
      <Modal
        onConfirmEvent={handleDelete}
        setIsOpenModal={setIsOpenModal}
        isOpenModal={isOpenModal}
      />
    </div>
  );
}

export default CategoryForm;
