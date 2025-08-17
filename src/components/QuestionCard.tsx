import { motion } from "framer-motion";
import { Question } from "@/App";

interface QuestionCardProps {
  question: Question;
  answer: number | undefined;
  onAnswerChange: (questionId: number, value: number) => void;
  isActive: boolean;
}

export default function QuestionCard({ question, answer, onAnswerChange, isActive }: QuestionCardProps) {
  return (
    <motion.div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-pink-100 mb-5 transition-all duration-300 ${
        isActive ? 'ring-2 ring-pink-200' : 'hover:shadow-md'
      }`}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <div className="text-gray-500 text-sm mb-3 flex justify-between">
        <span>问题 {question.id}/18</span>
      </div>
      
      <h3 className="text-lg font-medium text-gray-800 mb-6 leading-relaxed">
        {question.content}
      </h3>
      
      <div className="grid grid-cols-2 gap-3">
        {[1, 2, 3, 4].map((value) => (
          <button
            key={value}
            onClick={() => onAnswerChange(question.id, value)}
            className={`py-3 rounded-lg transition-all duration-200 flex items-center justify-center ${
              answer === value 
                ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium shadow-md' 
                : 'bg-gray-50 text-gray-600 hover:bg-gray-100'
            }`}
          >
            <span>{value}</span>
            <span className="ml-2 text-sm">
              {value === 1 && '非常讨厌'}
              {value === 2 && '一般'}
              {value === 3 && '比较喜欢'}
              {value === 4 && '非常喜欢'}
            </span>
          </button>
        ))}
      </div>
    </motion.div>
  );
}