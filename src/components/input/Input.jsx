import "./styles.css";
import useUser from "./../../hooks/UseUser";

function Input({
  inputType = "text",
  placehold,
  required,
  handleChange,
  defValue,
  customFormInput,
}) {
  const { categories } = useUser();

  return (
    <div className="input">
      {inputType !== "select" ? (
        <div>
          {inputType !== "textarea" ? (
            <>
              <input
                className={`input_inp input_${customFormInput} input-${inputType}`}
                id={placehold}
                value={defValue}
                type={inputType}
                placeholder={`ingresar ${placehold}...`}
                required={required}
                onChange={(ev) => {
                  handleChange !== undefined
                    ? handleChange(ev.target.value)
                    : "";
                }}
              />
              <label htmlFor={placehold}>{placehold}</label>
            </>
          ) : (
            <>
              <textarea
                className={`input_inp input_${customFormInput}`}
                id={placehold}
                value={defValue}
                type={inputType}
                placeholder={`ingresar ${placehold}...`}
                required={required}
                onChange={(ev) => {
                  handleChange !== undefined
                    ? handleChange(ev.target.value)
                    : "";
                }}
              ></textarea>
              <label htmlFor={placehold}>{placehold}</label>
            </>
          )}
        </div>
      ) : (
        <select
          className={`input-select input_${customFormInput}`}
          value={defValue}
          onChange={(ev) => {
            handleChange(ev.target.value);
          }}
        >
          <option value={""} disabled>
            Seleccionar Categoria
          </option>
          {categories.map((cat) => {
            return (
              <option key={cat.id} value={cat.name}>
                {cat.name}
              </option>
            );
          })}
        </select>
      )}
    </div>
  );
}

export default Input;
