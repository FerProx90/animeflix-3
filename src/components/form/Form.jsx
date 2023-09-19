import Input from "./../input/Input";
import Button from "./../button/Button";
import "./styles.css";

function Form({ formType, submitEvent, textButton, customFormInput }) {
  return (
    <form
      className="form"
      onSubmit={(ev) => {
        ev.preventDefault();
        submitEvent();
      }}
    >
      <div className="form_inputs_container">
        {formType?.map((inp) => (
          <div key={inp.id}>
            <Input
              customFormInput={customFormInput ?? ""}
              inputType={inp.inputType}
              placehold={inp.placehold}
              handleChange={inp.setData}
              required={inp.required}
              defValue={inp.inputValue ?? ""}
            />
            {inp.valid && <span>{inp.valid}</span>}
          </div>
        ))}
      </div>
      <Button
        text={textButton}
        comesFromForm={true}
        customButton={`form ${customFormInput}`}
      />
    </form>
  );
}

export default Form;
