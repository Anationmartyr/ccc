import { motion } from "framer-motion";

interface ProgressBarProps {
  currentPage: number;
  totalPages: number;
}

export default function ProgressBar({ currentPage, totalPages }: ProgressBarProps) {
  const progress = (currentPage / totalPages) * 100;
  
  return (
    <div className="w-full bg-gray-100 rounded-full h-2.5 mb-8">
      <motion.div
        className="bg-gradient-to-r from-pink-300 to-purple-300 h-2.5 rounded-full transition-all duration-500 ease-out"
        initial={{ width: 0 }}
        animate={{ width: `${progress}%` }}
      />
      
      <div className="flex justify-between mt-2">
        <span className="text-xs text-gray-500">
          第 {currentPage} 页 / 共 {totalPages} 页
        </span>
        <span className="text-xs text-gray-500">
          {Math.round(progress)}% 完成
        </span>
      </div>
    </div>
  );
}