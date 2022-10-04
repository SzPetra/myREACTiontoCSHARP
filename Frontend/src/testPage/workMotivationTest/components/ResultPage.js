import React from "react";
import "../../workMotivationTest/assets/modalWindow.css";
import { useContext } from "react";
import { ThemeContext } from "../../../App.js";
import classNames from "classnames";

const ResultPage = ({
  state,
  title,
  instruction,
  button,
  buttonOnClick,
  ...rest
}) => {
  const { design } = useContext(ThemeContext);

  const modalWindowContainerClasses = classNames({
    "modal-window-content-container": !design,
    "modal-window-content-container-contrast": design,
    active: state,
  });

  const modalWindowContentHeaderClasses = classNames({
    "modal-window-content-head active": !design,
    "modal-window-content-head-contrast active": design,
  });

  const modalWindowContentBodyClasses = classNames({
    "modal-window-content-body active": !design,
    "modal-window-content-body-contrast active": design,
  });

  return (
    <div className={modalWindowContainerClasses}>
      <h1 className={modalWindowContentHeaderClasses}>{title}</h1>
      <p className={modalWindowContentBodyClasses}>{instruction}</p>
    </div>
  );
};

export default ResultPage;
