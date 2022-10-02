import React, { useState } from "react";
import "../assets/workMotivationTest.css";
import workMotivationQuestions from "../questions/workMotivationQuestions";

const WorkMotivationTestPage = () => {
  const [index, setIndex] = useState(0);

  return (
    <div className="test-content-container">
      <h1>Olyan munkát szeretnék, ahol az ember</h1>
      <p>{workMotivationQuestions[index].question}</p>

      <section className="test-scale">
        <p className="scale-text">Nem szeretnék ilyen helyen dolgozni</p>
        <button className="scale-btn" value={1}>
          1
        </button>
        <button className="scale-btn" value={2}>
          2
        </button>
        <button className="scale-btn" value={3}>
          3
        </button>
        <button className="scale-btn" value={4}>
          4
        </button>
        <button className="scale-btn" value={5}>
          5
        </button>
        <p className="scale-text">Ilyen helyen szeretnék dolgozni</p>
      </section>

      <button onClick={() => setIndex(index + 1)}>Következő állítás</button>
    </div>
  );
};

export default WorkMotivationTestPage;
