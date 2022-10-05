import React from "react";
import workMotivationQuestions from "./questions/workMotivationQuestionsEnglish";
import "../workMotivationTest/assets/workMotivationTest.css";
import { FaArrowUp } from "react-icons/fa";
import classNames from "classnames";
import questionTypes from "./questions/questionTypes";

/* for changing the button when it reaches the last question */
export const changeButton = (
  hasValue,
  setHasValue,
  index,
  setIndex,
  setResultPage,
  design
) => {
  if (index === workMotivationQuestions.length - 1) {
    return (
      <button
        disabled={hasValue}
        className={
          design
            ? "work-mot-test-content-btn-contrast"
            : "work-mot-test-content-btn"
        }
        onClick={() => {
          countResult();
          setResultPage(true);
        }}
      >
        Befejezem a tesztet
      </button>
    );
  } else {
    return (
      <button
        disabled={hasValue}
        className={
          design
            ? "work-mot-test-content-btn-contrast"
            : "work-mot-test-content-btn"
        }
        onClick={() => {
          setIndex(index + 1);
          setHasValue(true);
        }}
      >
        Következő állítás
      </button>
    );
  }
};

/* for giving back feedback messages to the user */
export const feedbackMessage = (hasValue, design) => {
  /* CSS classnames for feedback messages */
  const feedbackMessagesClassnames = classNames({
    "work-mot-test-feedback-msg": !design,
    "work-mot-test-feedback-msg-contrast": design,
    active: !hasValue,
  });

  if (hasValue) {
    return (
      <p className={feedbackMessagesClassnames}>
        Kérlek válassz a fent felsorolt <FaArrowUp /> opciók közül egyet
      </p>
    );
  } else {
    return (
      <p className={feedbackMessagesClassnames}>
        Válaszodat elmentettük, továbbhaladhatsz a következő kérdésre
      </p>
    );
  }
};

/* for setting the values for the questions (via buttons) */
export const setQuestionValue = (newValue, setHasValue, index) => {
  for (let i = 0; i < workMotivationQuestions.length; i++) {
    if (workMotivationQuestions[i].id === workMotivationQuestions[index].id) {
      workMotivationQuestions[i].value = newValue;
      setHasValue(false);
    }
  }
};

/* for counting the result of the test */
export const countResult = () => {
  let result = [];

  for (let t = 0; t <= questionTypes.length - 1; t++) {
    let subResult = 0;
    for (let i = 0; i <= workMotivationQuestions.length - 1; i++) {
      if (workMotivationQuestions[i].type === questionTypes[t].type) {
        subResult += workMotivationQuestions[i].value;
      }
    }
    result.push(subResult);
  }

  console.log(result);
};
