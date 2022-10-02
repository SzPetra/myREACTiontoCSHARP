import React from "react";
import { useEffect } from "react";

const Select = ({ options, type, ...rest }) => {
  return (
    <select id={type} className="select-menu">
      {options.map((option) => (
        <option key={option.id} value={option.option}>
          {option.option}
        </option>
      ))}
    </select>
  );
};

export default Select;
