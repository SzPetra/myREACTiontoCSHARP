import React from "react";
const Form = ({btnId}) => {
    const handleSubmit = async (event) => {
        event.preventDefault();

        const participantName = document.getElementById("participantName").value;
        const email = document.getElementById("email").value;
        const selectTestType = document.getElementById("test-type");
        const testType = selectTestType.options[selectTestType.selectedIndex].text;
        const selectDisplayMode = document.getElementById("display-mode");
        const displayMode = selectDisplayMode.options[selectDisplayMode.selectedIndex].text;

        const pcNameNoWs = replaceWhitespce(participantName, "+");
        const testTypeNoWs = replaceWhitespce(testType, "+");
        const displayModeNoWs = replaceWhitespce(displayMode, "+");

        const urlQuery = `${pcNameNoWs}/${displayModeNoWs}/${testTypeNoWs}`;

        const submission = {
            Name: participantName,
            Email: email,
            TestUrl: urlQuery
        };
        console.log(submission)
        fetch("https://localhost:7200/api/Email/SendEmailWithTestLink", {
            method: "POST",
            headers: {
                'Content-Type': "application/json"
            },
            body: JSON.stringify(submission),
        })
        .then((response) => {
            console.log(response, 'response');
            if (response.status !== 200) {
                console.log("not ok" + response.status);
            }
        })
        .catch((err) => {
            console.log(err);
        });
    };
    
    return <button onClick={handleSubmit} type="submit" id={btnId}>Send test link</button>;
};


function replaceWhitespce(string, char){
    return string.replace(/ /g, char);
} 

export default Form