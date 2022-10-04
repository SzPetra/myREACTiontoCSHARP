import React from "react";

const Form = ({ btnId }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();

    const participantName = document.getElementById("client-name").value;
    const clientEmail = document.getElementById("client-email").value;
    const adminEmail = document.getElementById("email").value;

    const selectTestType = document.getElementById("test-type");
    console.log(selectTestType);
    const testType = selectTestType.options[selectTestType.selectedIndex].text;
    const selectDisplayMode = document.getElementById("test-mode");
    const displayMode =
      selectDisplayMode.options[selectDisplayMode.selectedIndex].text;

    const pcNameNoWs = replaceWhitespce(participantName, "+");
    const testTypeNoWs = replaceWhitespce(testType, "+");
    const displayModeNoWs = replaceWhitespce(displayMode, "+");

    const urlQuery = `${pcNameNoWs}/${displayModeNoWs}/${testTypeNoWs}`;
    console.log(urlQuery);
    const submission = {
      Name: participantName,
      ClientEmail: clientEmail,
      AdminEmail: adminEmail,
      TestUrl: urlQuery,
    };
    console.log(submission);
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
    <button onClick={handleSubmit} type="submit" id={btnId}>
      Click here to submit
    </button>
  );
};

function replaceWhitespce(string, char) {
  return string.replace(/ /g, char);
}

export default Form;
