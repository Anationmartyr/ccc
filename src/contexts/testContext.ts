import { createContext } from "react";
import { Answers, ResultData } from "@/App";

interface TestContextType {
  answers: Answers;
  setAnswers: (answers: Answers) => void;
  results: ResultData | null;
  setResults: (results: ResultData | null) => void;
  resetTest: () => void;
}

export const TestContext = createContext<TestContextType>({
  answers: {},
  setAnswers: () => {},
  results: null,
  setResults: () => {},
  resetTest: () => {},
});