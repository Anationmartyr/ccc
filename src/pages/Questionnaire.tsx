import { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TestContext } from "@/contexts/testContext";
import { questionPages } from "@/data/questions";
import QuestionCard from "@/components/QuestionCard";
import ProgressBar from "@/components/ProgressBar";

export default function Questionnaire() {
  const navigate = useNavigate();
  const { answers, setAnswers } = useContext(TestContext);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = questionPages.length;
  const questions = questionPages[currentPage - 1];
  
  // 检查当前页是否所有问题都已回答
  const isCurrentPageComplete = questions.every(question => answers[question.id] !== undefined);
  
  // 处理答案变更
  const handleAnswerChange = (questionId: number, value: number) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };
  
  // 导航到下一页
  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
      window.scrollTo(0, 0);
    }
  };
  
  // 导航到上一页
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
      window.scrollTo(0, 0);
    }
  };
  
  // 计算结果并导航到结果页
  const handleSubmit = () => {
    // 这里将在下一步实现结果计算逻辑
    navigate('/results');
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 font-sans">
      {/* 顶部导航 */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate('/')}
          className="text-gray-500 hover:text-pink-400 transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      <h1 className="text-xl font-medium text-gray-700">想象你是否会喜欢下列场景</h1>
        <div className="w-10"></div> {/* 占位元素，保持居中 */}
      </div>
      
      {/* 进度条 */}
      <ProgressBar currentPage={currentPage} totalPages={totalPages} />
      
      {/* 问题卡片区域 */}
      <div className="max-w-md mx-auto">
        {questions.map((question, index) => (
          <QuestionCard
            key={question.id}
            question={question}
            answer={answers[question.id]}
            onAnswerChange={handleAnswerChange}
            isActive={answers[question.id] !== undefined}
          />
        ))}
      </div>
      
      {/* 导航按钮 */}
      <div className="max-w-md mx-auto mt-8 flex justify-between">
        <button
          onClick={handlePrevPage}
          disabled={currentPage === 1}
          className={`px-6 py-3 rounded-full ${
            currentPage === 1
              ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
              : 'bg-white text-gray-700 border border-gray-200 hover:bg-gray-50'
          } transition-colors`}
        >
          <i className="fa-solid fa-arrow-left mr-2"></i>
          上一页
        </button>
        
        {currentPage < totalPages ? (
          <button
            onClick={handleNextPage}
            disabled={!isCurrentPageComplete}
            className={`px-6 py-3 rounded-full transition-colors ${
              isCurrentPageComplete
                ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            下一页
            <i className="fa-solid fa-arrow-right ml-2"></i>
          </button>
        ) : (
          <button
            onClick={handleSubmit}
            disabled={!isCurrentPageComplete}
            className={`px-6 py-3 rounded-full transition-all ${
              isCurrentPageComplete
                ? 'bg-gradient-to-r from-pink-300 to-purple-300 text-white font-medium hover:from-pink-400 hover:to-purple-400 shadow-md hover:shadow-lg'
                : 'bg-gray-100 text-gray-400 cursor-not-allowed'
            }`}
          >
            查看结果
            <i className="fa-solid fa-chart-pie ml-2"></i>
          </button>
        )}
      </div>
      
      {/* 底部装饰 */}
      <div className="flex justify-center mt-16">
        <div className="w-16 h-1 bg-purple-200 rounded-full"></div>
       </div>
       
       {/* 页脚设计信息 */}
       <div className="text-center text-pink-400 text-sm font-medium mt-12 pt-4 border-t border-pink-100">
         <i className="fa-solid fa-heart mr-1"></i>Designed by 阿狸&边边
       </div>
     </div>
  );
}