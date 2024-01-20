import { useContext } from "react";
import { AppContext } from "./contextfile/AppContext";
export default function ({ reset }) {
  const { crtQuestions, wrongQuestions } = useContext(AppContext);
  const skipped = 5 - (crtQuestions + wrongQuestions);
  console.log(skipped);
  const percent = Math.round((crtQuestions / 5) * 100);
  return (
    <div className="output-container">
      <h1>Result</h1>
      <p>{crtQuestions} out of 5</p>
      <p>Skipped : {skipped}</p>
      <p>you Got {percent}%</p>
      <button className="ResetBtn" onClick={reset}>
        Reset
      </button>
    </div>
  );
}
