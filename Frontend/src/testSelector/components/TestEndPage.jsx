import React, 
{
    useEffect,
    useContext
} from 'react';
import { TestDataContext } from './TestFinishedContext';
import { ThemeContext } from '../../App';
import classNames from 'classnames';
import "../../testPage/workMotivationTest/assets/workMotivationTest.css";

const TestEndPage = ({testData,clientData}) => {
    const { design } = useContext(ThemeContext);

    const modalWindowContainerClasses = classNames({
    "modal-window-content-containe active": !design ,
    "modal-window-content-container-contrast active": design,
    });

    const modalWindowContentHeaderClasses = classNames({
    "modal-window-content-head active": !design,
    "modal-window-content-head-contrast active": design,
    });

    const modalWindowContentBodyClasses = classNames({
    "modal-window-content-body active": !design,
    "modal-window-content-body-contrast active": design,
    });

    const modalWindowContentImgIds = classNames({
    "modal-window-content-img": !design,
    "modal-window-content-img-contrast": design,
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
        <h1 className={modalWindowContentHeaderClasses}>Test</h1>
        <p className={modalWindowContentBodyClasses}>instruction</p>
        <img id={modalWindowContentImgIds} src={"/salva_vita_blue.png"}></img>
    </div>
    )
}

export default TestEndPage
