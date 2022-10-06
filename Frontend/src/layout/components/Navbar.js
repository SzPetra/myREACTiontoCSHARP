import { Link } from "react-router-dom";
import "../assets/navbar.css";
import Dropdown from "./Dropdown";
import testPageOptions from "../../options/testPageOptions";
import editPageOptions from "../../options/editPageOptions";
import { useContext } from "react";
import { ThemeContext } from "../../App";
import Sidebar from "./Sidebar";

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
            role="img"
            aria-label="Salva Vita logo"
            alt="Salva Vita logo"
          />
        </Link>

        <ul
        role="list"
        aria-label="list of navigation bar options"
          className={
            design ? "header-content-menu-contrast" : "header-content-menu"
          }
        >
          {/* Test menu dropdown */}
          <Dropdown 
          role="listbox"
          aria-label="dropdown menu for test options"
          design={design} menu="Tests" options={testPageOptions} />

          {/* Create link page link */}
          <Link
          role="link"
          aria-label="link to generate test links"
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
          role="listbox"
          aria-label="dropdown menu for editing pages"
            design={design}
            menu="Edit tests"
            options={editPageOptions}
          />
        </ul>
        <Sidebar
        role="listbox"
        aria-label="sidebar navigation for different layouts" />
      </div>
    </>
  );
};

export default Navbar;
