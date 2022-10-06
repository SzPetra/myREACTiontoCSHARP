import React from "react";
import Navbar from "../../layout/components/Navbar";
import "../assets/createLinkPage.css";
import Select from "./Select";
import testPageOptions from "../../options/testPageOptions";
import modeOptions from "../../options/modeOptions";

import FetchDataButton from "../components/FetchDataButton";
import Input from "./Input";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const CreateLink = () => {
  const { design } = useContext(ThemeContext);
  return (
    <>
      <Navbar />
      <div
        className={
          design
            ? "link-page-content-container-contrast"
            : "link-page-content-container"
        }
      >
        <img
          src="/we-help-people.png"
          id="we-help-people-image"
          role="img"
          aria-label="we help people with disabilities"
          alt="We help people with disabilities"
        />

        <div
          className={design ? "parting-line-contrast" : "parting-line"}
        ></div>

        <form 
        role="form"
        aria-label="information for creating test link"
        className="link-page-form">
          <section className="link-page-form-content-left">
            {/* inputs */}
            <Input
            role="input"
            aria-label="input for clien's name"
              id="client-name"
              type="text"
              label="Enter client's full name*:"
              placeholder="John Doe"
            />
            <Input
            role="input"
            aria-label="input for client's email"
              id="client-email"
              type="email"
              label="Enter client's email address*:"
              placeholder="johndoe@gmail.com"
            />
            <Input
            role="input"
            aria-label="input for your email address"
              id="email"
              type="email"
              label="Enter email address for receiving test results*:"
              placeholder="salva_v@gmail.com"
            />
          </section>
          <section
            className={
              design
                ? "link-page-form-content-right-contrast"
                : "link-page-form-content-right"
            }
          >
            {/* select test type */}
            <label
            role="label"
            aria-label="label for test type"
            for="test-type">
              Choose the type of test* :
              <Select 
              role="listbox"
              aria-label="dropdown menu for test type"
              id="test-type" options={testPageOptions} />
            </label>

            {/* select mode */}
            <label
            role="label"
            aria-label="label for test mode"
             for="test-mode">
              Choose display mode:
              <p>(If you don't choose test mode, the default will be basic)</p>
              <Select
              role="listbox"
              aria-label="dropdown menu for test mode" 
              id="test-mode" options={modeOptions} />
            </label>
            <FetchDataButton
              btnId={
                design ? "link-page-form-btn-contrast" : "link-page-form-btn"
              }
            />
          </section>
        </form>
      </div>
    </>
  );
};

export default CreateLink;
