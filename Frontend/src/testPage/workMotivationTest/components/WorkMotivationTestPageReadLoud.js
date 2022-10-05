import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import workMotivationQuestions from "../questions/workMotivationQuestionsEnglish";
import "../assets/workMotivationTest.css";
import { useContext } from "react";
import {
  ThemeContext,
  IndexContext,
  ResultPageContext,
  HasValueContext,
} from "../../../App.js";
import WorkMotivationGreetingPage from "./WorkMotivationGreetingPage";
import ResultPage from "./ResultPage";
import {
  setQuestionValue,
  feedbackMessage,
  countResult,
} from "../workMotivationTestFunctions";

const WorkMotivationTestPageReadLoud = () => {
  /* useContext variables */
  const { design } = useContext(ThemeContext);
  const { index, setIndex } = useContext(IndexContext);
  const { resultPage, setResultPage } = useContext(ResultPageContext);
  const { hasValue, setHasValue } = useContext(HasValueContext);

  const { speak } = useSpeechSynthesis();

  /* label constants */
  const h1LAbel = "I would like a job where a person";
  const questionValue = `${workMotivationQuestions[index].question}`;
  const button1 = "one";
  const button2 = "two";
  const button3 = "three";
  const button4 = "four";
  const button5 = "five";
  const nextButtonLabel = "next question";
  const finishButtonLabel = "finish test";
  const feedbackLabel =
    "your answer has been saved, you can now proceed to the next question";

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
          }}
          onFocus={() => speak({ text: nextButtonLabel })}
        >
          Next question
        </button>
      );
    }
  };

  return (
    <>
      <WorkMotivationGreetingPage
        title="Work motivation test"
        instruction="Please choose between 1-5"
        button="Start test"
      />
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

        <section className="work-mot-test-scale">
          <p
            className={
              design
                ? "work-mot-test-scale-text-contrast"
                : "work-mot-test-scale-text"
            }
          >
            I do not want to work in a place like that
          </p>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            onClick={() => {
              setQuestionValue(1, setHasValue, index);
              speak({ text: feedbackLabel });
            }}
            onFocus={() => speak({ text: button1 })}
          >
            1
          </button>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            onClick={() => {
              setQuestionValue(2, setHasValue, index);
              speak({ text: feedbackLabel });
            }}
            onFocus={() => speak({ text: button2 })}
          >
            2
          </button>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            onClick={() => {
              setQuestionValue(3, setHasValue, index);
              speak({ text: feedbackLabel });
            }}
            onFocus={() => speak({ text: button3 })}
          >
            3
          </button>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            o
            onClick={() => {
              setQuestionValue(4, setHasValue, index);
              speak({ text: feedbackLabel });
            }}
            onFocus={() => speak({ text: button4 })}
          >
            4
          </button>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            onClick={() => {
              setQuestionValue(5, setHasValue, index);
              speak({ text: feedbackLabel });
            }}
            onFocus={() => speak({ text: button5 })}
          >
            5
          </button>
          <p
            className={
              design
                ? "work-mot-test-scale-text-contrast"
                : "work-mot-test-scale-text"
            }
          >
            I do want to work in a place like that
          </p>
        </section>
        {feedbackMessage(
          hasValue,
          design,
          "Your answer has been saved, you can now proceed to the next question",
          "Please choose one from the options above"
        )}
        {changeButtonEnglish()}
      </div>
      <ResultPage
        state={resultPage}
        title="The results"
        img="/salva_vita_blue.png"
      />
    </>
  );
};

export default WorkMotivationTestPageReadLoud;
