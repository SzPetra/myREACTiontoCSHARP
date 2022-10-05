import React, 
{
    useEffect,
    useContext
} from 'react';
import { TestDataContext } from './TestFinishedContext';

const TestEndPage = ({testData,clientData}) => {
    const {testResults, setTestResults} = useContext(TestDataContext);
    
    const clientEmail = "gg" ;
    const dataArr = clientData.split('/'); 
    console.log(dataArr[0]);


    const submission = {
        Name: dataArr[0],
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
