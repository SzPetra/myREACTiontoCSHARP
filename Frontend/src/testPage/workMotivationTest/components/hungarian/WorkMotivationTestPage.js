import React, { useContext, useState } from "react";
import "../../assets/workMotivationTest.css";
import workMotivationQuestions from "../../questions/hungarian/workMotivationQuestionsHungarian";
import { ThemeContext } from "../../../../App.js";
import WorkMotivationGreetingPage from "../WorkMotivationGreetingPage";
import ResultPage from "../ResultPage";

const WorkMotivationTestPage = () => {
  const [index, setIndex] = useState(0);
  const [resultPage, setResultPage] = useState(false);
  const { design } = useContext(ThemeContext);
  const [hasValue, setHasValue] = useState(true);

  const setQuestionValue = (newValue) => {
    for (let i = 0; i < workMotivationQuestions.length; i++) {
      if (workMotivationQuestions[i].id === workMotivationQuestions[index].id) {
        workMotivationQuestions[i].value = newValue;
        setHasValue(false);
      }
    }
  };

  const feedbackMessage = () => {
    if (hasValue) {
      return <p>Válassz</p>;
    } else {
      return <p>Elmentve</p>;
    }
  };

  const countResult = () => {
    let anyagiak = 0;

    for (let i = 0; i < workMotivationQuestions.length; i++) {
      if (workMotivationQuestions[i].type === "anyagiak") {
        anyagiak += workMotivationQuestions[i].value;
      }
    }

    console.log(anyagiak);
  };
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
          }}
        >
          Finish
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
  return (
    <div
      className={
        design
          ? "work-mot-test-content-container-contrast"
          : "work-mot-test-content-container"
      }
    >
      {" "}
      <WorkMotivationGreetingPage
        title="Motivációs teszt"
        instruction="Különböző állítások fognak megjelenni egyesével. A te feladatod, 
        hogy gondold végig ezeket az állításokat és pontozd őket egytől ötig(1-5).
        Az egyes(1) azt jelenti, hogy egyáltalán nem szeretnél ilyen helyen dolgozni,
        az ötös(5) pedig, hogy mindenképpen ilyen helyen szeretnél dolgozni. A hármas(3)
        semleges, a többi pedig ezek közé esik.
        Ha figyelmesen végigolvastad az utasítások kérlek nyomd meg az 'Elkezdem a tesztet' gombot, amellyel el fog indulni a teszt."
        button="Elkezdem a tesztet"
      />
      <h1
        className={
          design
            ? "work-mot-test-content-title-contrast"
            : "work-mot-test-content-title"
        }
        tabIndex={1}
      >
        Olyan munkát szeretnék, ahol az ember
      </h1>
      <p
        className={
          design
            ? "work-mot-test-content-question-contrast"
            : "work-mot-test-content-question"
        }
        tabIndex={2}
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
          Nem ilyen helyen szeretnék dolgozni
        </p>
        <button
          className={
            design
              ? "work-mot-test-scale-btn-contrast"
              : "work-mot-test-scale-btn"
          }
          onClick={() => setQuestionValue(1)}
        >
          1
        </button>
        <button
          className={
            design
              ? "work-mot-test-scale-btn-contrast"
              : "work-mot-test-scale-btn"
          }
          onClick={() => setQuestionValue(2)}
        >
          2
        </button>
        <button
          className={
            design
              ? "work-mot-test-scale-btn-contrast"
              : "work-mot-test-scale-btn"
          }
          onClick={() => setQuestionValue(3)}
        >
          3
        </button>
        <button
          className={
            design
              ? "work-mot-test-scale-btn-contrast"
              : "work-mot-test-scale-btn"
          }
          onClick={() => setQuestionValue(4)}
        >
          4
        </button>
        <button
          className={
            design
              ? "work-mot-test-scale-btn-contrast"
              : "work-mot-test-scale-btn"
          }
          onClick={() => setQuestionValue(5)}
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
          Ilyen helyen szeretnék dolgozni
        </p>
      </section>
      {feedbackMessage()}
      {changeButton()}
      <ResultPage state={resultPage} title="MAMAAAAAAA" />
    </div>
  );
};

export default WorkMotivationTestPage;
