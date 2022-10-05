import React from "react";
import "../assets/resultPage.css";
import { useContext } from "react";
import { ThemeContext } from "../../../App.js";
import classNames from "classnames";
import { Link } from "react-router-dom";

const ResultPage = ({ state, title, instruction, img, ...rest }) => {
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

  const modalWindowContentImgIds = classNames({
    "modal-window-content-img": !design,
    "modal-window-content-img-contrast": design,
  });

  return (
    <div className={modalWindowContainerClasses}>
      <h1 className={modalWindowContentHeaderClasses}>{title}</h1>
      <p className={modalWindowContentBodyClasses}>{instruction}</p>
      <Link to="/tests">
        <img id={modalWindowContentImgIds} src={img}></img>
      </Link>
    </div>
  );
};

export default ResultPage;
