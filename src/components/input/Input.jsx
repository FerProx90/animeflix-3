import React, { useEffect } from "react";
import "./styles.css";

function Input({ inputType = "text", placehold, required, handleChange }) {
  return (
    <div className="input">
      <input
        id={placehold}
        type={inputType}
        placeholder={`ingresar ${placehold}...`}
        required={required}
        onChange={(ev) => {
          handleChange !== undefined ? handleChange(ev.target.value) : "";
        }}
      />
      <label htmlFor={placehold}>{placehold}</label>
    </div>
  );
}

export default Input;
