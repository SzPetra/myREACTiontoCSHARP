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
import ModalWindow from "../../workMotivationTest/components/ModalWindow";
import classNames from "classnames";

export const runTimer = createContext();
const ChairLampTestPage = () => {
  const [isRuntime, setIsRuntime] = useState(false);
  const revisedIconList = useRef([]);
  const markedIconList = useRef([]);
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

  const classes = classNames({
    "chair-lamp-test-content-icon": !design,
    "chair-lamp-test-content-icon-contrast": design,
  });

  const checkedIconClasses = classNames({
    "chosen-icon": !design,
    "chosen-icon-contrast": design,
  });

  const changeColor = (e, id) =>{
    if (e.key==='Enter') {
    let icon = document.getElementById(`${id}`);
    icon.classList.add(checkedIconClasses);
    }
  };

  const setIcons = (id) => {
    if (revisedIconList.current.length === 0) {
      revisedIconList.current.push(id);
      revisedIcons += 1;
      console.log("revisednum: " + revisedIcons);
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
    if (iconId <= 0 ) {
      revisedIcons += 1;
      console.log("revisednum: " + revisedIcons);
      revisedIconList.current.push(id);
    }
  };

  const setError = (e, isCorrect, id) => {
    if (e.key==='Enter') {
      if (markedIconList.current.length === 0) {
        markedIconList.current.push(id);
        if (isCorrect === false) {
          errors += 1;
        }
      }
      let isIcon = true;
      for (let i = 0; i <= markedIconList.current.length; i++) {
        if (markedIconList.current[i] === id) {
          isIcon = false
          break;
        } else {
          isIcon = true
        }
      }
      if (isIcon === true) {
        markedIconList.current.push(id);
        if (isCorrect === false) {
          errors += 1;
        }
      }
      console.log("error num: " + errors);
    }
  };
  const handleMinute = (second, minute) => {
    if (second === "00" && minute !== "05" && revisedIcons > 0) {
      revisedIconsByMinute.push(revisedIcons);
      errorsByMinute.push(errors);
      revisedIcons = 0;
      errors = 0;
    }
    if (
      second === "00" &&
      minute === "00" &&
      revisedIconsByMinute.length !== 0
    ) {
      calculateResults();
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
    //return <Comp props={qualityOfAttetion} />
    console.log(qualityOfAttetion);
    console.log(performancePercentage);
    console.log(extentOfAttenton);
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  }

  const createIcons = () => {
    let arr = [];
    for (let i = 1; i <= 208; i++) {
      let iconObject = listOfIcons[getRandomInt(0, 15)];
      arr.push(
        <iconObject.icon
          key={i}
          id={i}
          className={classes}
          onFocus={() => setIcons(i)}
          onKeyUp={(e) => {
            changeColor(e, i)
            setError(e, iconObject.correct, i);
            
          }}
          tabIndex={i}
        />
      );
    }
    let lastIconObject = listOfIcons[getRandomInt(0, 15)];
    arr.push(
      <lastIconObject.icon
        key={209}
        id={209}
        isrevised={lastIconObject.isRevised}
        className={classes}
        onFocus={() => setIcons(209)}
        onBlur={() => setPageNum()}
        onKeyUp={(e) => {
          changeColor(e, 209);
          setError(e, lastIconObject.correct, 209);
         
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
    setRevisedIconsState((revisedIconsState = revisedIcons));
    setErrorState((errorsState = errors));
    setrevisedIconsByMinuteState(
     (revisedIconsByMinuteState = revisedIconsByMinute)
    );
    seterrorsByMinuteState((errorsByMinuteState = errorsByMinute));
    revisedIconList.current = [];
    markedIconList.current = [];
    setPage(page + 1);
  };

  return (
    <div>
      <runTimer.Provider value={{ isRuntime, setIsRuntime }}>
        <ModalWindow
          title="Chair-Lamp test"
          instruction="blaaaa"
          button="Start
        test"
          handleMinute={handleMinute}
        />
      </runTimer.Provider>
      {createIcons()}
    </div>
  );
};

export default ChairLampTestPage;
