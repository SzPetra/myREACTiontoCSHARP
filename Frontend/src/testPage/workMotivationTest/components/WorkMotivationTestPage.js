import React, { useContext } from "react";
import "../assets/workMotivationTest.css";
import workMotivationQuestions from "../questions/workMotivationQuestionsHunDemo";
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
  changeButton,
} from "../workMotivationTestFunctions";

const WorkMotivationTestPage = () => {
  /* useContext variables */
  const { design } = useContext(ThemeContext);
  const { index, setIndex } = useContext(IndexContext);
  const { resultPage, setResultPage } = useContext(ResultPageContext);
  const { hasValue, setHasValue } = useContext(HasValueContext);

  return (
    <>
      <WorkMotivationGreetingPage
        title="Motivációs teszt"
        instruction="Különböző állítások fognak megjelenni egyesével. A te feladatod, 
        hogy gondold végig ezeket az állításokat és pontozd őket egytől ötig(1-5).
        Az egyes(1) azt jelenti, hogy egyáltalán nem szeretnél ilyen helyen dolgozni,
        az ötös(5) pedig, hogy mindenképpen ilyen helyen szeretnél dolgozni. A hármas(3)
        semleges, a többi pedig ezek közé esik.
        Ha figyelmesen végigolvastad az utasítások kérlek nyomd meg az 'Elkezdem a tesztet' gombot, amellyel el fog indulni a teszt.
        Sok sikert kívánok!"
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
            onClick={() => setQuestionValue(1, setHasValue, index)}
          >
            1
          </button>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            onClick={() => setQuestionValue(2, setHasValue, index)}
          >
            2
          </button>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            onClick={() => setQuestionValue(3, setHasValue, index)}
          >
            3
          </button>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            onClick={() => setQuestionValue(4, setHasValue, index)}
          >
            4
          </button>
          <button
            className={
              design
                ? "work-mot-test-scale-btn-contrast"
                : "work-mot-test-scale-btn"
            }
            onClick={() => setQuestionValue(5, setHasValue, index)}
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
        {feedbackMessage(
          hasValue,
          design,
          "Válaszodat elmentettük, továbbhaladhatsz a következő kérdésre",
          "Kérlek válassz a fent felsorolt opciók közül egyet"
        )}
        {changeButton(
          hasValue,
          setHasValue,
          index,
          setIndex,
          setResultPage,
          design
        )}
      </div>
      <ResultPage
        state={resultPage}
        title="A teszt véget ért, nagyon ügyes voltál!"
        instruction="Köszönjük, hogy kitöltötted a tesztet, válaszaidat elmentettük. Kérlek vedd fel a kapcsolatot a mentoroddal."
        img="/salva_vita_blue.png"
      />
    </>
  );
};

export default WorkMotivationTestPage;
