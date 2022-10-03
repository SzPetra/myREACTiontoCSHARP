import React from "react";
import Navbar from "../../layout/components/Navbar";
import "../assets/createLinkPage.css";
import Select from "./Select";
import testPageOptions from "../../options/testPageOptions";
import modeOptions from "../../options/modeOptions";
import Form from "./Form";

import FetchDataButton from "../components/FetchDataButton";
import Input from "./Input";

const CreateLink = ({ design }) => {

  return (
    <>
      <Navbar />
      <div className="page-content-container">
        <img
          src="/we-help-people.png"
          id="we-help-people-image"
          alt="We help people with disabilities"
        />

        <form className={design ? "link-page-form-contrast" : "link-page-form"}>
          <section className="link-page-form-content-left">
            {/* inputs */}
            <Input
              id="client-name"
              type="text"
              label="Enter client's full name*:"
              placeholder="John Doe"
            />
            <Input
              id="client-email"
              type="email"
              label="Enter client's email address*:"
              placeholder="johndoe@gmail.com"
            />
            <Input
              id="email"
              type="email"
              label="Enter email address for receiving test results*:"
              placeholder="salva_v@gmail.com"
            />
          </section>
          <section className="link-page-form-content-right">
            {/* select test type */}
            <label for="test-type">
              Choose the type of test* :
              <Select id="test-type" options={testPageOptions} />
            </label>

            {/* select mode */}
            <label for="test-mode">
              Choose display mode:
              <p>(If you don't choose test mode, the default will be basic)</p>
              <Select id="test-mode" options={modeOptions} />
            </label>
            <FetchDataButton />
          </section>
        </form>
      </div>
    </>
  );
};

export default CreateLink;
