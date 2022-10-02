import React from "react";
import Navbar from "../../layout/components/Navbar";
import "../assets/createLinkPage.css";
import Select from "./Select";
import testPageOptions from "../../options/testPageOptions";
import modeOptions from "../../options/modeOptions";
import Form from "./Form";
const CreateLink = () => {
  return (
    <>
      <Navbar />
      <div className="link-page-content-container">
        <img
          src="/we-help-people.png"
          id="we-help-people-image"
          alt="We help people with disabilities"
        />

        <form className="link-page-form">
          <section className="link-page-form-content">
            {/* email input */}
            <label for="email">
              Enter a valid email address*:
              <input
                id="email"
                className="link-page-form-input-email"
                type="email"
                required
                placeholder="email of the receiver"
              />
            </label>

            {/* select test type */}
            <label for="test-type">
              Choose a type of test* :
              <Select id="test-type" options={testPageOptions} />
            </label>

            {/* select mode */}
            <label for="test-mode">
              Choose mode:
              <p>(if you don't choose test mode, the default will be normal)</p>
              <Select id="test-mode" options={modeOptions} />
            </label>
          </section>

          <Form />
          <button type="submit" id="link-page-form-btn">
            Send test link
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateLink;
