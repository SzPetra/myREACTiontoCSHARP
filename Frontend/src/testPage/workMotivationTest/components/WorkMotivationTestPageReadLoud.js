import React, { useState } from "react";
import workMotivationQuestions from "../questions/workMotivationQuestions";
import { useSpeechSynthesis } from "react-speech-kit";

const WorkMotivationTestPageReadLoud = () => {
  const { speak } = useSpeechSynthesis();
  const [questionValue, setQuestionValue] = useState("");

  return (
    <div className="work-mot-test-content-container">
      <h1 tabIndex={1} onFocus={() => speak("I would like a job where")}>
        Olyan munkát szeretnék, ahol az ember
      </h1>
    </div>
  );
};

export default WorkMotivationTestPageReadLoud;
