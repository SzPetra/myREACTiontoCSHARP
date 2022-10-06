import React from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import workMotivationQuestions from "../questions/workMotivationQuestionsHunDemo";
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
  const h1LAbel = "Olyan munkát szeretnék, ahol az ember";
  const questionValue = `${workMotivationQuestions[index].question}`;
  const button1 = "egy";
  const button2 = "kettő";
  const button3 = "három";
  const button4 = "négy";
  const button5 = "öt";
  const nextButtonLabel = "következő állítás";
  const finishButtonLabel = "befejezem a tesztet";
  const feedbackLabel =
    "válaszodat elmentettük, továbbléphetsz a következő kérdésre";

     /* change the buttons function */
  const changeButton = () => {
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
            setIndex(0);
            setHasValue(true);
          }}
          onFocus={() => speak({ text: finishButtonLabel })}
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
          onFocus={() => speak({ text: nextButtonLabel })}
        >
          Következő állítás
        </button>
      );
    }
  };

  return (
    <>
      <WorkMotivationGreetingPage
        title="Motivácíós teszt"
        instruction="Válassz egy számot 1 és 5 között"
        button="Elkezdem a tesztet"
      />
      <div
        className={
          design
            ? "work-mot-test-content-container-contrast"
            : "work-mot-test-content-container"
        }
      >
        <h1
        tabIndex={0}
          className={
            design
              ? "work-mot-test-content-title-contrast"
              : "work-mot-test-content-title"
          }
          onFocus={() => {speak({ text: h1LAbel }); speak({ text: questionValue })}}
        >
          Olyan munkát szeretnék, ahol az ember
        </h1>
        <p
          className={
            design
              ? "work-mot-test-content-question-contrast"
              : "work-mot-test-content-question"
          }
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
            Ilyen helyen szeretnék dolgozni
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
            Nem ilyen helyen szeretnék dolgozni
          </p>
        </section>
        {feedbackMessage(
          hasValue,
          design,
          "Válaszodat elmentettük, továbbléphetsz a következő kérdésre",
          "Kérlek válassz a fent felsorolt opciók közül egyet"
        )}
        {changeButton()}
      </div>
      <ResultPage
        state={resultPage}
        title="A végeredmény:"
        instruction={countResult()}
        img="/salva_vita_blue.png"
      />
    </>
  );
};

export default WorkMotivationTestPageReadLoud;
