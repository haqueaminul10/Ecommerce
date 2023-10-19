import React from "react";

function TextField({
  id,
  lable,
  type,
  name,
  value,
  placeholder,
  onChange,
  className,
}) {
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
        className={className}
      />
    </div>
  );
}

export default TextField;
