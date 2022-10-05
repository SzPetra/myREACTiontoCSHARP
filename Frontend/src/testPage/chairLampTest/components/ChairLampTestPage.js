import React, { useState, createContext } from "react";
import listOfIcons from "./ChairLampIcons";
import "../assets/chairLampTest.css";
import {
  extentOfAttentionCount,
  performancePercentageCount,
  qualityOfAttetionCount,
} from "./ChairLampTestResultCount";
import { useContext, useRef } from "react";
import { ThemeContext } from "../../../App.js";
import ChairLampGreetingPage from "./ChairLampGreetingPage";
import classNames from "classnames";
import { TestDataContext, TestFinishedContext } from "../../../testSelector/components/TestFinishedContext";
import { iconNums } from "./IconNums";
import ResultPage from "../../workMotivationTest/components/ResultPage";

export const runTimer = createContext();

const ChairLampTestPage = () => {
  const [isRuntime, setIsRuntime] = useState(false);
  const revisedIconList = useRef([]);
  const markedIconList = useRef([]);
  const [resultPage, setResultPage] = useState(false);
  //const chosen = useRef(null);
  const { design } = useContext(ThemeContext);
  const [page, setPage] = useState(0);
  let [revisedIconsState, setRevisedIconsState] = useState(0);
  let [errorsState, setErrorState] = useState(0);
  let [revisedIconsByMinuteState, setrevisedIconsByMinuteState] = useState([]);
  let [errorsByMinuteState, seterrorsByMinuteState] = useState([]);
  let revisedIcons = revisedIconsState;
  let errors = errorsState;
  let revisedIconsByMinute = revisedIconsByMinuteState;
  let errorsByMinute = errorsByMinuteState;

  const { testComplete, setTestComplete } = useContext(TestFinishedContext);
  const { testResults, setTestResults } = useContext(TestDataContext);

  const classes = classNames({
    "chair-lamp-test-content-icon": !design,
    "chair-lamp-test-content-icon-contrast": design,
  });

  const checkedIconClasses = classNames({
    "chosen-icon": !design,
    "chosen-icon-contrast": design,
  });

  const changeColor = (e) => {
    if (e.key === "Enter" && e.target.dataset.checkedId === "not-chosen") {
      e.target.classList.add(checkedIconClasses);
      e.target.dataset.checkedId = "chosen";
    }
  };

  const setIcons = (id) => {
    if (revisedIconList.current.length === 0) {
      revisedIconList.current.push(id);
      revisedIcons += 1;
    }
    let iconId = 0;
    for (let i = 0; i <= revisedIconList.current.length; i++) {
      if (revisedIconList.current[i] === id) {
        iconId = id;
        break;
      } else {
        iconId = 0;
      }
    }
    if (iconId <= 0) {
      revisedIcons += 1;
      revisedIconList.current.push(id);
    }
  };

  const setError = (e, isCorrect, id) => {
    if (e.key === "Enter") {
      if (markedIconList.current.length === 0) {
        markedIconList.current.push(id);
        if (isCorrect === false) {
          errors += 1;
        }
      }
      let isIcon = true;
      for (let i = 0; i <= markedIconList.current.length; i++) {
        if (markedIconList.current[i] === id) {
          isIcon = false;
          break;
        } else {
          isIcon = true;
        }
      }
      if (isIcon === true) {
        markedIconList.current.push(id);
        if (isCorrect === false) {
          errors += 1;
        }
      }
    }
  };
  const handleMinute = (second, minute) => {
    if (second === "01" && minute !== "05" && revisedIcons > 0) {
      revisedIconsByMinute.push(revisedIcons);
      errorsByMinute.push(errors);
      console.log("revsed by minute: " + revisedIconsByMinute);
      revisedIcons = 0;
      errors = 0;
    }
    if (
      second === "00" &&
      minute === "00" &&
      revisedIconsByMinute.length !== 0
    ) {
      calculateResults();
      setResultPage(true);
    }
  };

  const calculateResults = () => {
    let sumOfRevisedIcons = revisedIconsByMinuteState.reduce(
      (result, number) => result + number
    );
    let sumOfErrors = errorsByMinuteState.reduce(
      (result, number) => result + number
    );
    let performancePercentage = performancePercentageCount(
      sumOfRevisedIcons,
      sumOfErrors
    );
    let extentOfAttenton = extentOfAttentionCount(revisedIconsByMinuteState);
    let qualityOfAttetion = qualityOfAttetionCount(
      revisedIconsByMinuteState,
      errorsByMinuteState,
      sumOfRevisedIcons,
      sumOfErrors
    );
    console.log(testResults);
    if (testResults === "data") {
      setTestResults(
        {
          quality : qualityOfAttetion,
          percentage : performancePercentage,
          extent : extentOfAttenton
        }
      )
      setTestComplete(true);
    }
  

    console.log(qualityOfAttetion);
    console.log(performancePercentage);
    console.log(extentOfAttenton);

  };

  const createIcons = () => {
    let arr = [];
    let iconList = iconNums[page].iNums;
    for (let i = 0; i <= 207; i++) {
      let iconObject = listOfIcons[iconList[i]];
      arr.push(
        <iconObject.icon
          key={i + 1}
          id={i + 1}
          data-checked-id="not-chosen"
          className={classes}
          onFocus={() => setIcons(i + 1)}
          onKeyPress={(e) => {
            changeColor(e);
            setError(e, iconObject.correct, i + 1);
          }}
          tabIndex={i + 1}
        />
      );
    }
    let lastIconObject = listOfIcons[iconList[208]];
    arr.push(
      <lastIconObject.icon
        key={209}
        id={209}
        data-checked-id="not-chosen"
        className={classes}
        onFocus={() => setIcons(209)}
        onBlur={() => setPageNum()}
        onKeyPress={(e) => {
          changeColor(e);
          setError(e, lastIconObject.correct, 209);
          setIsRuntime(false);
        }}
        tabIndex={209}
      />
    );
    return (
      <div
        className={
          design
            ? "chair-lamp-test-content-container-contrast"
            : "chair-lamp-test-content-container"
        }
      >
        {arr.map((icon) => icon)}
      </div>
    );
  };

  const setPageNum = () => {
    if (page < 2) {
      setRevisedIconsState((revisedIconsState = revisedIcons));
      setErrorState((errorsState = errors));
      setrevisedIconsByMinuteState(
        (revisedIconsByMinuteState = revisedIconsByMinute)
      );
      seterrorsByMinuteState((errorsByMinuteState = errorsByMinute));
      revisedIconList.current = [];
      markedIconList.current = [];
      setPage(page + 1);
    } else if (page === 2) {
      if (isNaN(revisedIcons) === false) {
        revisedIconsByMinute.push(revisedIconsState);
        errorsByMinute.push(errorsState);
      }
      setResultPage(true);
      calculateResults();
    }
  };

  return (
    <div>
      <runTimer.Provider value={{ isRuntime, setIsRuntime }}>
        <ChairLampGreetingPage
          title="Chair-Lamp test"
          instruction="In this test you will be given pictures of different kind of subjects. Your task
          is to select the all the chairs and lamp on the page.
          There will be 19 pictures in a row and there are 11 rows. You can use the 'TAB' key to
          move to the next picture. If you think it is a chair or a lamp press 'ENTER'. The color
          of the picture will change, meaning you selected that subject. If you ever need to go backward
          you can use the 'TAB' and 'SHIFT' key combination for that. You will have 5 minutes to complete this test,
          but if you have completed all 3 pages before you run out of time, it will automatically stop.
          When you get to the last subject on the page, just simply press 'TAB' again and it will
          jump to the next page.
          Good luck!"
          button="Start
        test"
          handleMinute={handleMinute}
        />
      </runTimer.Provider>
      {createIcons()}
      <ResultPage
        state={resultPage}
        title="The test has ended, great job!"
        instruction="Thank you for filling out this test, your answers have been saved.
         Please contact your mentor."
        img="/salva_vita_blue.png"
      />
    </div>
  );
};

export default ChairLampTestPage;
