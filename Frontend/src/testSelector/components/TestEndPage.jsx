import React, 
{
    useEffect,
    useContext
} from 'react';
import { TestDataContext } from './TestFinishedContext';
import { ThemeContext } from '../../App';
import classNames from 'classnames';
import "../assets/testEndPage.css";

const TestEndPage = ({testData,clientData}) => {
    const { design } = useContext(ThemeContext);

    const modalWindowContainerClasses = classNames({
    "endpade-container": !design ,
    "endpage-container-contrast": design,
    });

    const modalWindowContentHeaderClasses = classNames({
    "endpage-content-head": !design,
    "endpage-content-head-contrast": design,
    });

    const modalWindowContentBodyClasses = classNames({
    "endpage-content-body": !design,
    "endpage-content-body-contrast": design,
    });

    const modalWindowContentImgIds = classNames({
    "endpage-content-img": !design,
    "endpage-content-img-contrast": design,
    });

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
        <div className={modalWindowContainerClasses}>
        <h1 className={modalWindowContentHeaderClasses}>The test has ended, great job!</h1>
        <p className={modalWindowContentBodyClasses}>Thank you for filling out this test. Your answers have been saved. Please contanct your mentor.</p>
        <img id={modalWindowContentImgIds} src="/salva_vita_blue.png"></img>
    </div>
    )
}

export default TestEndPage
