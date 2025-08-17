import { Answers, ResultData } from "@/App";
import { questions } from "@/data/questions";

export function calculateResults(answers: Answers): ResultData {
  // 初始化分数对象
  const typeScores: { [key: string]: number } = {
    "衣着反差": 0,
    "身份反差": 0,
    "想法反差": 0
  };
  
  const approachScores: { [key: string]: number } = {
    "氛围": 0,
    "语言": 0,
    "身体": 0
  };
  
  const combinationScores: { [key: string]: number } = {
    "氛围*衣着反差": 0,
    "语言*衣着反差": 0,
    "身体*衣着反差": 0,
    "氛围*身份反差": 0,
    "语言*身份反差": 0,
    "身体*身份反差": 0,
    "氛围*想法反差": 0,
    "语言*想法反差": 0,
    "身体*想法反差": 0
  };
  
  // 计算每个问题的分数
  questions.forEach(question => {
    const answer = answers[question.id];
    if (answer) {
      // 累加类型分数
      typeScores[question.type] += answer;
      
      // 累加途径分数
      approachScores[question.approach] += answer;
      
      // 记录组合以便后续计算
      const combinationKey = `${question.approach}*${question.type}`;
      combinationScores[combinationKey] += answer;
    }
  });
  
  // 计算组合得分（类型得分 × 途径得分）
  Object.keys(combinationScores).forEach(key => {
    const [approach, type] = key.split('*');
    if (approach && type) {
      combinationScores[key] = typeScores[type] * approachScores[approach];
    }
  });
  
  return {
    typeScores,
    approachScores,
    combinationScores
  };
}