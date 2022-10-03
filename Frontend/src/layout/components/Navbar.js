import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../assets/navbar.css";
import Dropdown from "./Dropdown";
import testPageOptions from "../../options/testPageOptions";
import editPageOptions from "../../options/editPageOptions";

const Navbar = () => {
  const [design, setDesign] = useState(true);

  const handleDesign = () => {
    if (design) {
      setDesign(false);
    } else {
      setDesign(true);
    }
  };

  return (
    <div
      className={
        design
          ? "header-content-container-contrast"
          : "header-content-container"
      }
    >
      <img
        src="/salva_logo.jpg"
        id={design ? "salva-logo-contrast" : "salva-logo"}
        aria-label="Salva Vita logo"
        alt="Salva Vita logo"
      />

      <section className="header-content">
        <ul className="header-content-menu">
          {/* Test menu dropdown */}
          <Dropdown design={design} menu="Tests" options={testPageOptions} />

          {/* Create link page link */}
          <Link
            to="/tests/create-link"
            className={
              design
                ? "header-content-menu-link-contrast"
                : "header-content-menu-link"
            }
          >
            Create link for tests
          </Link>

          {/* Edit tests menu dropdown */}
          <Dropdown
            design={design}
            menu="Edit tests"
            options={editPageOptions}
          />
        </ul>
      </section>
      <button onClick={() => handleDesign()}> Change layout</button>
    </div>
  );
};

export default Navbar;
