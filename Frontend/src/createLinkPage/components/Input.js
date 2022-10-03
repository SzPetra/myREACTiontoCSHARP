import React from "react";

const Input = ({ id, type, label, placeholder, ...rest }) => {
  return (
    <label className="link-page-form-label" for={id}>
      {label}
      <input
        className="link-page-form-input"
        id={id}
        type={type}
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default Input;
