import React, { useState } from "react";
import "../assets/modalWindow.css";
import { useContext } from "react";
import { ThemeContext } from "../../../App.js";
import classNames from "classnames";

const ModalWindowHungarian = ({
  title,
  instruction,
  button,
  buttonOnClick,
  ...rest
}) => {
  const [modalWindow, setModalWindow] = useState(true);
  const { design } = useContext(ThemeContext);

  const modalWindowContainerClasses = classNames({
    "modal-window-content-container": !design,
    "modal-window-content-container-contrast": design,
    active: modalWindow,
  });

  const modalWindowContentHeaderClasses = classNames({
    "modal-window-content-head active": !design,
    "modal-window-content-head-contrast active": design,
  });

  const modalWindowContentBodyClasses = classNames({
    "modal-window-content-body active": !design,
    "modal-window-content-body-contrast active": design,
  });

  const modalWindowContentButton = classNames({
    "modal-window-content-btn active": !design,
    "modal-window-content-btn-contrast active": design,
  });

  return (
    <div className={modalWindowContainerClasses}>
      <h1 className={modalWindowContentHeaderClasses}>{title}</h1>
      <p className={modalWindowContentBodyClasses}>{instruction}</p>
      <button
        className={modalWindowContentButton}
        onClick={() => {
          setModalWindow(false);
        }}
      >
        {button}
      </button>
    </div>
  );
};

export default ModalWindowHungarian;
