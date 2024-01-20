import { useState } from "react";
import Header from "./components/Header";
import Question from "./components/Question";
import { AppContext } from "./components/contextfile/AppContext";
import Output from "./components/Output";
export default function App() {
  const [question, setQuestion] = useState({
    selectedQuestionId: 1,
    crtQuestions: 0,
    wrongQuestions: 0,
  });

  function nextClickHandler() {
    setQuestion((prev) => {
      return {
        ...prev,
        selectedQuestionId: prev.selectedQuestionId + 1,
      };
    });
  }
  function resetHandler() {
    setQuestion({
      selectedQuestionId: 1,
      crtQuestions: 0,
      wrongQuestions: 0,
    });
  }
  function clickedCrt() {
    setQuestion((prev) => {
      return {
        ...prev,
        crtQuestions: prev.crtQuestions + 1,
      };
    });
  }
  function handleWrong() {
    setQuestion((prev) => {
      return {
        ...prev,
        wrongQuestions: prev.wrongQuestions + 1,
      };
    });
  }
  console.log(question);
  const ctxValue = {
    crtQuestions: question.crtQuestions,
    selectedQuestionId: question.selectedQuestionId,
    wrongQuestions: question.wrongQuestions,
    nextClickHandler: nextClickHandler,
  };
  return (
    <AppContext.Provider value={ctxValue}>
      <Header />
      <hr></hr>
      {question.selectedQuestionId < 6 ? (
        <Question
          question={question}
          nextClick={nextClickHandler}
          clickedCrt={clickedCrt}
          clickedWrong={handleWrong}
        />
      ) : (
        <Output reset={resetHandler} />
      )}
      <hr></hr>
    </AppContext.Provider>
  );
}
