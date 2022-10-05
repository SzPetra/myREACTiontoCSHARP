import React, { useState } from "react";
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";
import "../assets/workMotivationTest.css";
import workMotivationQuestions from "../questions/workMotivationQuestionsEnglish";
import { useContext } from "react";
import { ThemeContext } from "../../../App.js";

const WorkMotivationTestPageSpeechRecognition = () => {
  const { design } = useContext(ThemeContext);
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const [isListening, setIsListening] = useState(false);
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  /* speak labels */
  const h1LAbel = "I would like a job where a person";
  const questionValue = `${workMotivationQuestions[index].question}`;
  const nextButtonLabel = "Next question";
  const choose = "press any key and say 1-5";
  const listenLabel = "I'm listening";

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
        onFocus={() => speak({ text: choose })}
        onMouseDown={listen}
        onKeyDown={listen}
        onMouseUp={stop}
        onKeyUp={stop}
      >
        Listen
      </button>
      {listening && <p>I'm listening</p>}

      <button
        className={
          design
            ? "work-mot-test-content-btn-contrast"
            : "work-mot-test-content-btn"
        }
        onClick={() => setIndex(index + 1)}
        onFocus={() => speak({ text: nextButtonLabel })}
      >
        Next question
      </button>
    </div>
  );
};

export default WorkMotivationTestPageSpeechRecognition;
