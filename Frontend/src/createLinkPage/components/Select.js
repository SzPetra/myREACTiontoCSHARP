import React from "react";

const Select = ({ options, type, ...rest }) => {
  return (
<<<<<<< HEAD
    <select id={type} className="select-menu">
=======
    <select className="link-page-form-select-menu">
>>>>>>> main
      {options.map((option) => (
        <option key={option.id} value={option.option}>
          {option.option}
        </option>
      ))}
    </select>
  );
};

export default Select;
