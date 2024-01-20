import { createContext } from "react";
export const AppContext = createContext({
  selectedQuestionId: 1,
  crtQuestions: 0,
  wrongQuestions: 0,
  nextClickHandler: () => {},
});
