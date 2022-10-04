import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Select = ({ id, options, ...rest }) => {
  const { design } = useContext(ThemeContext);
  return (
    <select
      id={id}
      className={
        design
          ? "link-page-form-select-menu-contrast"
          : "link-page-form-select-menu"
      }
    >
      {options.map((option) => (
        <option key={option.id} value={option.option}>
          {option.option}
        </option>
      ))}
    </select>
  );
};

export default Select;
