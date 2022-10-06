import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Select = ({ id, options, ...rest }) => {
  const { design } = useContext(ThemeContext);
  return (
    <select
    role="listbox"
    aria-label="dropdown menu for options"
      id={id}
      className={
        design
          ? "link-page-form-select-menu-contrast"
          : "link-page-form-select-menu"
      }
    >
      {options.map((option) => (
        <option
        role="option"
        aria-label="option"
         key={option.id} value={option.option}>
          {option.option}
        </option>
      ))}
    </select>
  );
};

export default Select;
