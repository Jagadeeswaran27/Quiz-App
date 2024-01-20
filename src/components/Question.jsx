import { quizData } from "../data";
import { useState, useEffect, useContext } from "react";
import { AppContext } from "./contextfile/AppContext";
const initialClicked = 0;

export default function Question({ nextClick, clickedCrt, clickedWrong }) {
  const [clicked, setClicked] = useState(initialClicked);
  const [classNames, setClassNames] = useState(Array(4).fill(""));
  const { selectedQuestionId } = useContext(AppContext);

  const filteredQuestion = quizData.find((data) => {
    return data.id === selectedQuestionId;
  });

  useEffect(() => {
    setClicked(initialClicked);
    setClassNames(Array(4).fill(""));
  }, [selectedQuestionId]);

  function clickHandle(e, index) {
    if (clicked < 1) {
      setClicked(clicked + 1);
      console.log(e.target.innerText.toLowerCase());
      if (
        e.target.innerText.toLowerCase() === filteredQuestion.ans.toLowerCase()
      ) {
        const newClassNames = classNames.slice();
        newClassNames[index] = "correct";
        setClassNames(newClassNames);
        clickedCrt();
      } else {
        const newClassNames = classNames.slice();
        newClassNames[index] = "wrong";
        setClassNames(newClassNames);
        clickedWrong();
      }
    }
  }

  return (
    <div className="questionContainer">
      <div key={filteredQuestion.id}>
        <h1>
          Q{filteredQuestion.id}.{filteredQuestion.ques}
        </h1>
        <ul>
          {filteredQuestion.options.map((option, index) => (
            <button
              onClick={(e) => clickHandle(e, index)}
              className={classNames[index]}
              key={index}
            >
              {option}
            </button>
          ))}
        </ul>
      </div>
      <div className="nextBtn">
        <button onClick={nextClick}>Next</button>
      </div>
    </div>
  );
}
