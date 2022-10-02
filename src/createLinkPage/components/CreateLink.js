import React from "react";
import Navbar from "../../layout/components/Navbar";
import "../assets/createLinkPage.css";
import Select from "./Select";
import testPageOptions from "../../options/testPageOptions";
import modeOptions from "../../options/modeOptions";

const CreateLink = () => {
  return (
    <>
      <Navbar />
      <div className="page-content-container">
        <img
          src="/we-help-people.png"
          id="we-help-people-image"
          alt="We help people with disabilities"
        />

        <form className="form">
          <section className="form-content">
            {/* email input */}
            <label for="email">Enter a valid email address*:</label>
            <input
              id="email"
              type="email"
              required
              placeholder="email of the receiver"
            />

            {/* select test type */}
            <label for="test-type">Choose a type of test* :</label>
            <Select id="test-type" options={testPageOptions} />

            {/* select mode */}
            <label for="mode">
              Choose mode:
              <p>(if you don't choose test mode, the default will be normal)</p>
            </label>
            <Select id="mode" options={modeOptions} />
          </section>

          <button type="submit" id="form-btn">
            Send test link
          </button>
        </form>
      </div>
    </>
  );
};

export default CreateLink;
