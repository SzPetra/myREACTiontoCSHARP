import React, { useState } from "react";
import "../../assets/modalWindow.css";

const ModalWindowHungarian = () => {
  const [modalWindow, setModalWindow] = useState(true);

  return (
    <>
      <div
        className={
          modalWindow
            ? "modal-window-content-container active"
            : "modal-window-conetnt-container"
        }
      >
        <h1 className="modal-window-content-head">The work motivation test</h1>
        <p className="modal-window-content-body">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam
          voluptatem ab eaque tempore animi deleniti beatae quibusdam delectus.
        </p>
        <button onClick={() => setModalWindow(false)}>close</button>
      </div>
      <div className="modal-window-overlay"></div>
    </>
  );
};

export default ModalWindowHungarian;
