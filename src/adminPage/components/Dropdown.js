import React from "react";
import { FaAngleDown, FaAngleUp } from "react-icons/fa";
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
      >
        {menu} <FaAngleDown />
        {isHovering && (
          <ul className="sub-menu">
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
