import React, { useState, useContext } from "react";
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";
import "../assets/workMotivationTest.css";
import workMotivationQuestions from "../questions/workMotivationQuestionsEnglish";
import {
  ThemeContext,
  HasValueContext,
  ResultPageContext,
} from "../../../App.js";
import { setQuestionValue, countResult } from "../workMotivationTestFunctions";

const WorkMotivationTestPageSpeechRecognition = () => {
  /* useContext variables */
  const { design } = useContext(ThemeContext);
  const { hasValue, setHasValue } = useContext(HasValueContext);
  const { setResultPage } = useContext(ResultPageContext);

  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
      setHasValue(false);
      setQuestionValue(value, setHasValue, index);
    },
  });

  /* speak labels */
  const h1LAbel = "I would like a job where a person";
  const questionValue = `${workMotivationQuestions[index].question}`;
  const nextButtonLabel = "next question";
  const finishButtonLabel = "finish test";
  const chooseLabel = "press and hold space and say a number from 1-5";

  /* speak statements */
  const startListening = (e) => {
    if (e.keyCode == 32) {
      listen();
    }
  };

  /* change the buttons function */
  const changeButtonEnglish = () => {
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
          onFocus={() => speak({ text: finishButtonLabel })}
        >
          Finish test
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
            setValue("");
          }}
          onFocus={() => speak({ text: nextButtonLabel })}
        >
          Next question
        </button>
      );
    }
  };

  return (
    <div
      className={
        design
          ? "work-mot-test-content-container-contrast"
          : "work-mot-test-content-container"
      }
    >
      <h1
        className={
          design
            ? "work-mot-test-content-title-contrast"
            : "work-mot-test-content-title"
        }
        tabIndex={1}
        onFocus={() => speak({ text: h1LAbel })}
      >
        I would like a job where a person
      </h1>
      <p
        className={
          design
            ? "work-mot-test-content-question-contrast"
            : "work-mot-test-content-question"
        }
        tabIndex={2}
        onFocus={() => speak({ text: questionValue })}
      >
        {workMotivationQuestions[index].question}
      </p>

      <p
        className={design ? "speech-rec-value-contrast" : "speech-rec-value"}
        onChange={(event) => setValue(event.target.value)}
      >
        {value}
      </p>
      <button
        className={
          design
            ? "work-mot-test-content-btn-contrast"
            : "work-mot-test-content-btn"
        }
        onFocus={() => speak({ text: chooseLabel })}
        onMouseDown={listen}
        onKeyDown={(e) => startListening(e)}
        onMouseUp={() => {
          speak({ text: value });
          stop();
        }}
        onKeyUp={() => {
          speak({ text: value });
          stop();
        }}
      >
        Listen
      </button>
      {listening && <p>I'm listening</p>}
      {changeButtonEnglish()}
    </div>
  );
};

export default WorkMotivationTestPageSpeechRecognition;
