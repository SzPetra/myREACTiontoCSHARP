import React from "react";
import { FaAngleDown } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState, useContext } from "react";
import { ResultPageContext } from "../../App";

const Dropdown = ({ design, menu, options, ...rest }) => {
  const [isActive, setIsActive] = useState(false);
  const { setResultPage } = useContext(ResultPageContext);

  const handleDropdown = () => {
    if (!isActive) {
      setIsActive(true);
    } else {
      setIsActive(false);
    }
  };

  return (
    <>
      <Link
        onClick={handleDropdown}
        className={
          design
            ? "header-content-menu-link-contrast"
            : "header-content-menu-link"
        }
      >
        {menu} <FaAngleDown />
        {isActive && (
          <ul
            className={
              design
                ? "header-content-sub-menu-contrast"
                : "header-content-sub-menu"
            }
          >
            {options.map((option) => (
              <Link
                onClick={() => setResultPage(false)}
                tabIndex={0}
                key={option.id}
                to={option.pageLink}
              >
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
