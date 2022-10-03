import React, { useContext, useState } from "react";
import "../../assets/workMotivationTest.css";
import workMotivationQuestions from "../../questions/hungarian/workMotivationQuestionsHungarian";
import { ThemeContext } from "../../../../App.js";
import ModalWindowHungarian from "../hungarian/ModalWindowHungarian";

const WorkMotivationTestPage = () => {
  const [index, setIndex] = useState(0);
  const { design } = useContext(ThemeContext);

  const setQuestionValue = (newValue) => {
    for (let i = 0; i < workMotivationQuestions.length; i++) {
      if (workMotivationQuestions[i].id === workMotivationQuestions[index].id) {
        workMotivationQuestions[i].value = newValue;
      }
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

  return (
    <>
      <ModalWindowHungarian />
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

        <button
          className={
            design
              ? "work-mot-test-content-btn-contrast"
              : "work-mot-test-content-btn"
          }
          onClick={() => setIndex(index + 1)}
        >
          Következő állítás
        </button>
        <button onClick={() => countResult()}>Finish</button>
      </div>
    </>
  );
};

export default WorkMotivationTestPage;
