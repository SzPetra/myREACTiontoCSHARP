import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const Dropdown = ({ menu, options, ...rest }) => {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <>
      <Link
        to="/TODO"
        onMouseOver={handleMouseOver}
        onMouseOut={handleMouseOut}
        className="header-content-menu-link"
      >
        {menu} <FaAngleDown />
        {isHovering && (
          <ul className="header-content-sub-menu">
            {options.map((option) => (
              <Link key={option.id} to={option.pageLink}>
                {option.option}
              </Link>
            ))}
          </ul>
        )}
      </Link>
    </>
  );
};

export default Dropdown;
