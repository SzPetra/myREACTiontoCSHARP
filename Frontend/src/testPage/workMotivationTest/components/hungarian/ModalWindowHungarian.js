import React, { useState } from "react";
import "../../assets/modalWindow.css";

const ModalWindowHungarian = ({ title, instruction, button, ...rest }) => {
  const [modalWindow, setModalWindow] = useState(true);

  return (
    <div
      className={
        modalWindow
          ? "modal-window-content-container active"
          : "modal-window-conetnt-container"
      }
    >
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
        onClick={() => setModalWindow(false)}
      >
        {button}
      </button>
    </div>
  );
};

export default ModalWindowHungarian;
