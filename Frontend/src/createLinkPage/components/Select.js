import React from "react";

const Select = ({ options, type, ...rest }) => {
  return (
    <select id={type} className="link-page-form-select-menu">
      {options.map((option) => (
        <option key={option.id} value={option.option}>
          {option.option}
        </option>
      ))}
    </select>
  );
};

export default Select;
