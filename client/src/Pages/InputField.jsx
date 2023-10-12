import React from "react";

function InputField({ id, lable, type, name, value, placeholder, onChange }) {
  return (
    <div>
      <label htmlFor={id}>{lable}</label>
      <input
        type={type}
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChange}
      />
    </div>
  );
}

export default InputField;
