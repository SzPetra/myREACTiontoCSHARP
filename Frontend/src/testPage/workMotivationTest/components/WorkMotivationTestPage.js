import React, { useState } from "react";
import "../assets/workMotivationTest.css";
import workMotivationQuestions from "../questions/workMotivationQuestions";

const WorkMotivationTestPage = () => {
  const [index, setIndex] = useState(0);

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
    <div className="work-mot-test-content-container">
      <h1 tabIndex={1}>Olyan munkát szeretnék, ahol az ember</h1>
      <p tabIndex={2}>{workMotivationQuestions[index].question}</p>

      <section className="work-mot-test-scale">
        <p className="work-mot-test-scale-text">
          Nem szeretnék ilyen helyen dolgozni
        </p>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(1)}
        >
          1
        </button>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(2)}
        >
          2
        </button>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(3)}
        >
          3
        </button>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(4)}
        >
          4
        </button>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(5)}
        >
          5
        </button>
        <p className="work-mot-test-scale-text">
          Ilyen helyen szeretnék dolgozni
        </p>
      </section>

      <button onClick={() => setIndex(index + 1)}>Következő állítás</button>
      <button onClick={() => countResult()}>Finish</button>
    </div>
  );
};

export default WorkMotivationTestPage;
