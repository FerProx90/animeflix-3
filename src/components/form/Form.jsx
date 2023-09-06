import React, { useEffect } from "react";
import Input from "./../input/Input";
import Button from "./../button/Button";
import "./styles.css";

function Form({ formType, submitEvent, textButton }) {
  return (
    <form
      className="form"
      onSubmit={(ev) => {
        ev.preventDefault();
        submitEvent();
      }}
    >
      <div className="form_inputs_container">
        {formType.map((inp) => (
          <div key={inp.id}>
            <Input
              inputType={inp.inputType}
              placehold={inp.placehold}
              handleChange={inp.setData}
              required={inp.required}
            />
            {inp.valid && <span>{inp.valid}</span>}
          </div>
        ))}
      </div>
      <Button text={textButton} comesFromForm={true} customButton={"form"} />
    </form>
  );
}

export default Form;
