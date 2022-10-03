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
        <form className="form">
          <section className="form-content">
            {/* test participant name input */}
            <label for="participantName">Enter the name of the reciver*:</label>
            <input
              id="participantName"
              type="email"
              required
              placeholder="name of the receiver"
            />
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
              <Select id="test-type" options={testPageOptions} type="test-type" />
            </label>
            {/* select mode */}
            <label for="test-mode">
              Choose mode:
              <p>(if you don't choose test mode, the default will be normal)</p>
              <Select id="test-mode" options={modeOptions} type="display-mode"/>
            </label>
            <Select id="mode" options={modeOptions} type="display-mode"/>
          </section>
          <Form btnId={"form-btn"}/>

        </form>
      </div>
    </>
  );
};

export default CreateLink;
