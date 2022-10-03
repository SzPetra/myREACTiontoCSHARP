import React from "react";

const Select = ({ id, options, ...rest }) => {
  return (
    <select id={id} className="link-page-form-select-menu">
      {options.map((option) => (
        <option key={option.id} value={option.option}>
          {option.option}
        </option>
      ))}
    </select>
  );
};

export default Select;
