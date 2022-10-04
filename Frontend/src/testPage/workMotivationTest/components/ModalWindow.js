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

  const className = classNames({
    "modal-window-content-container-contrast active": design,
    "modal-window-content-container active": !design,
    "modal-window-content-container": !modalWindow,
  });

  return (
    <>
      {modalWindow && (
        <div className={className}>
          <h1
            className={
              modalWindow
                ? "modal-window-content-head active"
                : "modal-window-content-head"
            }
          >
            {title}
          </h1>
          <p
            className={
              modalWindow
                ? "modal-window-content-body active"
                : "modal-window-content-body"
            }
          >
            {instruction}
          </p>
          <button
            className={
              modalWindow
                ? "modal-window-content-btn active"
                : "modal-window-content-btn"
            }
            onClick={() => {
              setModalWindow(false);
            }}
          >
            {button}
          </button>
        </div>
      )}
    </>
  );
};

export default ModalWindowHungarian;
