import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Input = ({ id, type, label, placeholder, ...rest }) => {
  const { design } = useContext(ThemeContext);
  return (
    <label
      role="label"
      aria-label="label for input"
      className={
        design ? "link-page-form-label-contrast" : "link-page-form-label"
      }
      for={id}
    >
      {label}
      <input
      role="input"
      aria-label="input field"
        className={
          design ? "link-page-form-input-contrast" : "link-page-form-input"
        }
        id={id}
        type={type}
        placeholder={placeholder}
        required
      />
    </label>
  );
};

export default Input;
