import { Link } from "react-router-dom";
import "../assets/navbar.css";
import Dropdown from "./Dropdown";
import testPageOptions from "../../options/testPageOptions";
import editPageOptions from "../../options/editPageOptions";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Navbar = () => {
  const { design } = useContext(ThemeContext);
  return (
    <>
      <div
        className={
          design
            ? "header-content-container-contrast"
            : "header-content-container"
        }
      >
        <Link to="/tests">
          <img
            src="/salva_logo.jpg"
            id={design ? "salva-logo-contrast" : "salva-logo"}
            aria-label="Salva Vita logo"
            alt="Salva Vita logo"
          />
        </Link>

        <ul
          className={
            design ? "header-content-menu-contrast" : "header-content-menu"
          }
        >
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
      </div>
    </>
  );
};

export default Navbar;
