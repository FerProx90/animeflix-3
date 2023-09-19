import { useState, useEffect } from "react";
import Form from "../../components/form/Form";
import Button from "../../components/button/Button";
import useUser from "../../hooks/UseUser";
import "./styles.css";

function SerieForm() {
  const { setSeries, series } = useUser();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [video, setVideo] = useState("");
  const [imagen, setImagen] = useState("");
  const [isValidInput, setIsValidInput] = useState(true);
  const [isDataSaved, setIsDataSaved] = useState(false);

  const serieFormData = [
    {
      id: 1,
      placehold: "Serie",
      required: "required",
      inputValue: name,
      setData: setName,
    },
    {
      id: 4,
      placehold: "Video (url)",
      required: "required",
      inputValue: video,
      setData: setVideo,
    },
    {
      id: 5,
      placehold: "Imagen (url)",
      required: "required",
      inputValue: imagen,
      setData: setImagen,
    },
    {
      id: 3,
      placehold: "Categoria",
      required: "required",
      inputType: "select",
      setData: setCategory,
      inputValue: category,
      valid: !isValidInput ? "Seleccione categoria" : undefined,
    },
    {
      id: 2,
      inputType: "textarea",
      placehold: "Descripcion",
      required: "required",
      inputValue: description,
      setData: setDescription,
    },
  ];

  useEffect(() => {
    setIsValidInput(true);
  }, [category]);

  const resetInputs = () => {
    setName("");
    setCategory("");
    setImagen("");
    setDescription("");
    setVideo("");
  };

  const handleSubmit = async () => {
    if (category === "") {
      setIsValidInput(false);
      return;
    }

    setSeries((prev) => [
      ...prev,
      {
        name,
        description,
        video,
        imagen,
        category,
      },
    ]);

    console.log(series);
    setIsDataSaved(true);
    resetInputs();

    setTimeout(() => {
      setIsDataSaved(false);
    }, 2000);
  };

  return (
    <div className="container form-serie_container">
      <div className="form-serie_card">
        <div className="banner_serie-form">
          <div
            className="img"
            src="../../assets/Totoro-PNG-Clipart-Background.png"
          ></div>
          <Button
            text={"Nueva Categoria"}
            linkRef={"/categoria-form"}
            customButton={"new-category"}
          />
        </div>
        <div className="form-serie_form">
          {isDataSaved && <span className="form-succes">Serie Guardada</span>}
          <Form
            formType={serieFormData}
            textButton={"Guardar"}
            submitEvent={handleSubmit}
            customFormInput={"serie-form"}
          />
          <Button
            text={"Limpiar"}
            comesFromForm={true}
            customButton={"form-restart"}
            onClickEvent={resetInputs}
          />
        </div>
      </div>
    </div>
  );
}

export default SerieForm;
