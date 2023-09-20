import "./modal.css";
import Button from "./../button/Button";
import { GrCircleAlert } from "react-icons/gr";

export default function Modal({ isOpenModal, setIsOpenModal, onConfirmEvent }) {
  const toggleModal = () => {
    setIsOpenModal(!isOpenModal);
  };

  return (
    <>
      {isOpenModal && (
        <div className="modal">
          <div onClick={toggleModal} className="overlay"></div>
          <div className="modal-content">
            <div className="modal-advice">
              <GrCircleAlert fontSize={30} />
              <p>Seguro que desea eliminar la categoria?</p>
            </div>
            <div className="modal_buttons">
              <Button
                text={"Aceptar"}
                onClickEvent={onConfirmEvent}
                comesFromForm={true}
                customButton={"modal"}
              />
              <Button
                text={"cancelar"}
                onClickEvent={toggleModal}
                comesFromForm={true}
                customButton={"cancel"}
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}
