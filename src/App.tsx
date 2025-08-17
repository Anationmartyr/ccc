import { Routes, Route } from "react-router-dom";
import Welcome from "@/pages/Welcome";
import Questionnaire from "@/pages/Questionnaire";
import Results from "@/pages/Results";
import { useState } from "react";
import { TestContext } from '@/contexts/testContext';

// 定义问题类型接口
export interface Question {
  id: number;
  type: string;
  approach: string;
  content: string;
}

// 定义答案类型接口
export interface Answers {
  [questionId: number]: number;
}

// 定义结果类型接口
export interface ResultData {
  typeScores: { [key: string]: number };
  approachScores: { [key: string]: number };
  combinationScores: { [key: string]: number };
}

export default function App() {
  const [answers, setAnswers] = useState<Answers>({});
  const [results, setResults] = useState<ResultData | null>(null);
  
  // 清除测试数据
  const resetTest = () => {
    setAnswers({});
    setResults(null);
  };

  return (
    <TestContext.Provider value={{ answers, setAnswers, results, setResults, resetTest }}>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/questionnaire" element={<Questionnaire />} />
        <Route path="/results" element={<Results />} />
      </Routes>
    </TestContext.Provider>
  );
}
