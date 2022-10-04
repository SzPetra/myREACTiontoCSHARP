import React, 
{
    useEffect,
    useContext
} from 'react';
import { TestDataContext } from './TestFinishedContext';

const TestEndPage = () => {
    const {testResults, setTestResults} = useContext(TestDataContext);
    
    const participantName = "Huab";
    const clientEmail = "gg" ;


    const submission = {
        Name: participantName,
        ClientEmail: clientEmail,
        TestData: JSON.stringify(testResults)
    };
    console.log(submission);
    fetch("https://localhost:7200/api/Email/SendEmailWithTestResult", {
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
  return (
    <div>
      End
    </div>
  )
}

export default TestEndPage
