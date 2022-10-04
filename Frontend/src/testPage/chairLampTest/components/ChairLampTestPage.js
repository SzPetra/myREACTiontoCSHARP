import React, { useState } from "react";
import listOfIcons from "./ChairLampIcons";
import "../assets/chairLampTest.css";
import Timer from "./Timer";
import {
  extentOfAttentionCount,
  performancePercentageCount,
  qualityOfAttetionCount,
} from "./ChairLampTestResultCount";
import { useContext } from "react";
import { ThemeContext } from "../../../App";

const ChairLampTestPage = () => {
  const [chosen, setChosen] = useState(false);
  const { design } = useContext(ThemeContext);
  const [page, setPage] = React.useState(0);
  let [revisedIconsState, setRevisedIconsState] = React.useState(0);
  let [errorsState, setErrorState] = React.useState(0);
  let [revisedIconsByMinuteState, setrevisedIconsByMinuteState] =
    React.useState([]);
  let [errorsByMinuteState, seterrorsByMinuteState] = React.useState([]);
  let revisedIcons = revisedIconsState;
  let errors = errorsState;
  let revisedIconsByMinute = revisedIconsByMinuteState;
  let errorsByMinute = errorsByMinuteState;

  const setIcons = () => {
    revisedIcons += 1;
    console.log("revisednum: " + revisedIcons);
  };

  const setError = (e, isIconCorrect) => {
    if (e.key === "Enter") {
      if (isIconCorrect !== true) {
        errors += 1;
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
      console.log("Hey");
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
      let iconObject = listOfIcons[getRandomInt(1, 16)];
      arr.push(
        <iconObject.icon
          key={i}
          id={i}
          className={
            (design
              ? "chair-lamp-test-content-icon-contrast"
              : "chair-lamp-test-content-icon")
            //(chosen ? "chosen-icon" : "not-chosen-icon")
          }
          onFocus={() => setIcons()}
          onKeyPress={(e) => {
            setError(e, iconObject.correct);
            setChosen(true);
          }}
          tabIndex={i}
        />
      ); 
    }
    let lastIconObject = listOfIcons[getRandomInt(1, 16)];
    arr.push(
      <lastIconObject.icon
        key={209}
        id={209}
        className={
          (design
            ? "chair-lamp-test-content-icon-contrast"
            : "chair-lamp-test-content-icon")
          //(chosen ? "chosen-icon" : "not-chosen-icon")
        }
        onFocus={() => setIcons()}
        onBlur={()=> setPageNum()}
        onKeyPress={(e) => {
          setError(e, lastIconObject.correct);
          setChosen(true);
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
    console.log(revisedIconsByMinute);
    setPage(page + 1);
  };

  return (
    <div>
      <Timer handleMinute={handleMinute} />
      {createIcons()}
    </div>
  );
};

export default ChairLampTestPage;
