import React from "react";
import { useContext } from "react";
import { ThemeContext } from "../../App";

const Form = () => {
  const { design } = useContext(ThemeContext);
  const submission = {
    Name: "Kázmér",
    Email: "szabimi12@gmail.com",
    TestUrl: "Tigris, Cica",
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    fetch("https://localhost:7200/api/Email/SendEmailWithTestLink", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(submission),
    })
      .then((response) => {
        console.log(response, "response");
        if (response.status !== 200) {
          console.log("not ok" + response.status);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <button
      id={design ? "link-page-form-btn-contrast" : "link-page-form-btn"}
      onClick={handleSubmit}
    >
      Click here to submit
    </button>
  );
};

export default Form;
