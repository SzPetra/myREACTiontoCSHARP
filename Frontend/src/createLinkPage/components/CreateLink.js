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

<<<<<<< HEAD
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
=======
        <form className="link-page-form">
          <section className="link-page-form-content">
>>>>>>> main
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
<<<<<<< HEAD
            <label for="test-type">Choose a type of test* :</label>
            <Select id="test-type" options={testPageOptions} type="test-type" />
=======
            <label for="test-type">
              Choose a type of test* :
              <Select id="test-type" options={testPageOptions} />
            </label>
>>>>>>> main

            {/* select mode */}
            <label for="test-mode">
              Choose mode:
              <p>(if you don't choose test mode, the default will be normal)</p>
              <Select id="test-mode" options={modeOptions} />
            </label>
<<<<<<< HEAD
            <Select id="mode" options={modeOptions} type="display-mode"/>
          </section>
          <Form btnId={"form-btn"}/>
=======
          </section>

          <Form />
          <button type="submit" id="link-page-form-btn">
            Send test link
          </button>
>>>>>>> main
        </form>
      </div>
    </>
  );
};

export default CreateLink;
