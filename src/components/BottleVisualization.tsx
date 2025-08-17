import { motion } from "framer-motion";
import { ResultData } from "@/App";

interface BottleVisualizationProps {
  results: ResultData;
}

// 定义瓶子颜色映射
const bottleColors = {
  "氛围*衣着反差": "from-blue-300 to-cyan-300",
  "语言*衣着反差": "from-purple-300 to-pink-300",
  "身体*衣着反差": "from-amber-300 to-orange-300",
  "氛围*身份反差": "from-green-300 to-teal-300",
  "语言*身份反差": "from-pink-300 to-rose-300",
  "身体*身份反差": "from-indigo-300 to-purple-300",
  "氛围*想法反差": "from-yellow-300 to-amber-300",
  "语言*想法反差": "from-emerald-300 to-green-300",
  "身体*想法反差": "from-sky-300 to-blue-300"
};

// 定义瓶子标签
const bottleLabels = {
  "氛围*衣着反差": "氛围-衣着",
  "语言*衣着反差": "语言-衣着",
  "身体*衣着反差": "身体-衣着",
  "氛围*身份反差": "氛围-身份",
  "语言*身份反差": "语言-身份",
  "身体*身份反差": "身体-身份",
  "氛围*想法反差": "氛围-想法",
  "语言*想法反差": "语言-想法",
  "身体*想法反差": "身体-想法"
};

export default function BottleVisualization({ results }: BottleVisualizationProps) {
  // 获取所有组合分数并找出最大值用于归一化
  const combinationScores = results.combinationScores;
  const scores = Object.values(combinationScores);
  const maxScore = Math.max(...scores);
  
  // 获取组合键的有序列表
  const combinationKeys = [
    "氛围*衣着反差", "语言*衣着反差", "身体*衣着反差",
    "氛围*身份反差", "语言*身份反差", "身体*身份反差",
    "氛围*想法反差", "语言*想法反差", "身体*想法反差"
  ];
  
  return (
    <div className="mt-8">
      <div className="grid grid-cols-3 gap-6">
        {combinationKeys.map((key, index) => {
          const score = combinationScores[key];
          // 归一化分数到0-100范围，确保至少有10%的显示高度
          const normalizedHeight = Math.max(10, (score / maxScore) * 100);
          
          return (
            <div key={key} className="flex flex-col items-center">
              <div className="relative w-16 h-40 border-2 border-gray-200 rounded-t-full rounded-b-2xl overflow-hidden bg-gray-50 mb-2">
                {/* 瓶子中的液体 */}
                <motion.div
                  className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t ${bottleColors[key as keyof typeof bottleColors]} transition-all duration-1500 ease-out`}
                  style={{ height: `${normalizedHeight}%` }}
                  initial={{ height: 0 }}
                  animate={{ height: `${normalizedHeight}%` }}
                  transition={{ duration: 1.5, delay: index * 0.1 }}
                />
                
                {/* 瓶子高光 */}
                <div className="absolute top-4 right-2 w-2 h-16 bg-white/30 rounded-full"></div>
              </div>
              
              <span className="text-xs text-gray-600 text-center">{bottleLabels[key as keyof typeof bottleLabels]}</span>
            </div>
          );
        })}

      </div>
    </div>
  );
}