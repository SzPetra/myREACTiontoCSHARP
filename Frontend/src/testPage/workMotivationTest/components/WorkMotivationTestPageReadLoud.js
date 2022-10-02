import React, { useState } from "react";
import { useSpeechSynthesis } from "../../../react-speech-kit";
import workMotivationQuestions from "../questions/workMotivationQuestions";

const WorkMotivationTestPageReadLoud = () => {
  /* usestate constants */
  const [questionValue, setQuestionValue] = useState("");
  const [index, setIndex] = useState(0);

  const { readOutLoud } = useSpeechSynthesis();

  return (
    <div className="work-mot-test-content-container">
      <h1 tabIndex={1} onFocus={() => readOutLoud("I would like a job where")}>
        Olyan munkát szeretnék, ahol az ember
      </h1>

      <p
        tabIndex={2}
        value={questionValue}
        onChange={(e) => setQuestionValue(e.target.value)}
        onFocus={() => readOutLoud({ text: questionValue })}
      >
        {workMotivationQuestions[index].question}
      </p>

      <button
        onFocus={() => readOutLoud("Next question")}
        onClick={() => setIndex(index + 1)}
      >
        Következő állítás
      </button>
    </div>
  );
};

export default WorkMotivationTestPageReadLoud;
