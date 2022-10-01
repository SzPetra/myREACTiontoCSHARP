import React from "react";
import { Link } from "react-router-dom";
import "../assets/adminPage.css";
import Dropdown from "./Dropdown";
import testPageOptions from "../options/testPageOptions";
import editPageOptions from "../options/editPageOptions";

const Header = () => {
  return (
    <div className="header-container">
      <img
        src="/salva_logo.jpg"
        id="salva-logo"
        aria-label="Salva Vita logo"
        alt="Salva Vita logo"
      />

      <section className="header-content-container">
        <ul className="header-content">
          {/* Test menu dropdown */}
          <Dropdown menu="Tests" options={testPageOptions} />

          {/* Create link page link */}
          <Link to="/tests/create-link">Create link for tests</Link>

          {/* Edit tests menu dropdown */}
          <Dropdown menu="Edit tests" options={editPageOptions} />
        </ul>
      </section>
    </div>
  );
};

export default Header;
