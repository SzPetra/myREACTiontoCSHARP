import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import "../assets/sidebar.css";

const Sidebar = () => {
  const { setDesign } = useContext(ThemeContext);
  const { isActive, setIsActive } = useState(false);

  const handleOnClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  return (
    <div className="side-navigation-content-container">
      <img
        onClick={() => handleOnClick}
        alt="Accessibility logo"
        src="/accessibility_logo.png"
        id="sidebar-accessibility-logo"
      />
      <div
        className={
          isActive
            ? "side-navigation-content"
            : "side-navigation-content-active"
        }
      >
        <option onClick={() => setDesign()}>Negative contrast</option>
        <option>Bigger text</option>
      </div>
    </div>
  );
};

export default Sidebar;
