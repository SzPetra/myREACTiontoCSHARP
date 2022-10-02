import React from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css";
import Dropdown from "./Dropdown";
import testPageOptions from "../../options/testPageOptions";
import editPageOptions from "../../options/editPageOptions";

const Navbar = () => {
  return (
    <div className="header-content-container">
      <img
        src="/salva_logo.jpg"
        id="salva-logo"
        aria-label="Salva Vita logo"
        alt="Salva Vita logo"
      />

      <section className="header-content">
        <ul className="header-content-menu">
          {/* Test menu dropdown */}
          <Dropdown menu="Tests" options={testPageOptions} />

          {/* Create link page link */}
          <Link to="/tests/create-link" className="header-content-menu-link">
            Create link for tests
          </Link>

          {/* Edit tests menu dropdown */}
          <Dropdown menu="Edit tests" options={editPageOptions} />
        </ul>
      </section>
    </div>
  );
};

export default Navbar;
