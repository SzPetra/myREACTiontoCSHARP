import React, { useState } from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App.js";
import "../assets/sidebar.css";
import classNames from "classnames";

const Sidebar = () => {
  const { design, setDesign } = useContext(ThemeContext);
  const [isActive, setIsActive] = useState(false);

  const handleOnClick = () => {
    if (isActive) {
      setIsActive(false);
    } else {
      setIsActive(true);
    }
  };

  const setBodyBackgroundColor = () => {
    if(!design) {
      document.body.style = "background : black;";
    }
    else {
      document.body.style = "background : white;";
    }
  }

  const sideNavigationContentClasses = classNames({
    "side-navigation-content": !design,
    "side-navigation-content-contrast": design,
    active: isActive,
  });

  const sideNavigationContentOptionClasses = classNames({
    "side-navigation-content-option": !design,
    "side-navigation-content-option-contrast": design,
  });

  const sideNavigationContentLogoClasses = classNames({
    "sidebar-accessibility-logo": !isActive,
    "sidebar-accessibility-logo active": isActive,
  });

  return (
    <div className="side-navigation-content-container">
      <img
        onClick={() => handleOnClick()}
        alt="Accessibility logo"
        src="/accessibility_logo.png"
        className={sideNavigationContentLogoClasses}
      />
      <div className={sideNavigationContentClasses}>
        <option
          className={sideNavigationContentOptionClasses}
          onClick={() => {
            setDesign();
            setBodyBackgroundColor();
          }}
        >
          Negative contrast
        </option>
        <option className={sideNavigationContentOptionClasses}>
          Bigger text
        </option>
        <option className={sideNavigationContentOptionClasses}>
          High contrast
        </option>
      </div>
    </div>
  );
};

export default Sidebar;
