import React, { useState } from "react";
import { useSpeechSynthesis } from "react-speech-kit";
import workMotivationQuestions from "../../questions/hungarian/workMotivationQuestionsHungarian";
import "../../assets/workMotivationTest.css";

const WorkMotivationTestPageReadLoud = () => {
  const { speak } = useSpeechSynthesis();
  const [index, setIndex] = useState(0);

  /* label constants */
  const h1LAbel = "Olyan munkát szeretnék, ahol az ember";
  const questionValue = `${workMotivationQuestions[index].question}`;
  const button1 = "one";
  const button2 = "two";
  const button3 = "three";
  const button4 = "four";
  const button5 = "five";
  const nextButtonLabel = "Next question";

  const setQuestionValue = (newValue) => {
    for (let i = 0; i < workMotivationQuestions.length; i++) {
      if (workMotivationQuestions[i].id === workMotivationQuestions[index].id) {
        workMotivationQuestions[i].value = newValue;
      }
    }
  };

  return (
    <div className="work-mot-test-content-container">
      <h1 tabIndex={1} onFocus={() => speak({ text: h1LAbel })}>
        Olyan munkát szeretnék, ahol az ember
      </h1>
      <p
        className="work-mot-test-content-question"
        tabIndex={2}
        onFocus={() => speak({ text: questionValue })}
      >
        {workMotivationQuestions[index].question}
      </p>

      <section className="work-mot-test-scale">
        <p className="work-mot-test-scale-text">
          Nem ilyen helyen szeretnék dolgozni
        </p>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(1)}
          onFocus={() => speak({ text: button1 })}
        >
          1
        </button>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(2)}
          onFocus={() => speak({ text: button2 })}
        >
          2
        </button>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(3)}
          onFocus={() => speak({ text: button3 })}
        >
          3
        </button>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(4)}
          onFocus={() => speak({ text: button4 })}
        >
          4
        </button>
        <button
          className="work-mot-test-scale-btn"
          onClick={() => setQuestionValue(5)}
          onFocus={() => speak({ text: button5 })}
        >
          5
        </button>
        <p className="work-mot-test-scale-text">
          Ilyen helyen szeretnék dolgozni
        </p>
      </section>

      <button
        className="work-mot-test-content-btn"
        onClick={() => setIndex(index + 1)}
        onFocus={() => speak({ text: nextButtonLabel })}
      >
        Következő állítás
      </button>
    </div>
  );
};

export default WorkMotivationTestPageReadLoud;
