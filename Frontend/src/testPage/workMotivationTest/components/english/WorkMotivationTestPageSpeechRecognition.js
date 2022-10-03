import React, { useState } from "react";
import { useSpeechRecognition, useSpeechSynthesis } from "react-speech-kit";
import "../../assets/workMotivationTest.css";
import workMotivationQuestions from "../../questions/hungarian/workMotivationQuestionsHungarian";

const WorkMotivationTestPageSpeechRecognition = () => {
  const [index, setIndex] = useState(0);
  const [value, setValue] = useState("");
  const { speak } = useSpeechSynthesis();
  const { listen, listening, stop } = useSpeechRecognition({
    onResult: (result) => {
      setValue(result);
    },
  });

  const choose = "press any key and say 1-5";

  return (
    <div className="work-mot-test-content-container">
      <h1 tabIndex={1}>Olyan munkát szeretnék, ahol az ember</h1>
      <p className="work-mot-test-content-question" tabIndex={2}>
        {workMotivationQuestions[index].question}
      </p>
      <p onChange={(event) => setValue(event.target.value)}>{value}</p>
      <button
        onFocus={() => speak({ text: choose })}
        onMouseDown={listen}
        onKeyDown={listen}
        onMouseUp={stop}
        onKeyUp={stop}
      >
        🎤
      </button>
      {listening && <p>I'm listening</p>}

      <button
        className="work-mot-test-content-btn"
        onClick={() => setIndex(index + 1)}
      >
        Következő állítás
      </button>
    </div>
  );
};

export default WorkMotivationTestPageSpeechRecognition;
