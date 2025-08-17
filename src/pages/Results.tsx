import { useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { TestContext } from "@/contexts/testContext";
import { calculateResults } from "@/utils/calculateResults";
import ResultSection from "@/components/ResultSection";
import BottleVisualization from "@/components/BottleVisualization";

export default function Results() {
  const navigate = useNavigate();
  const { answers, results, setResults, resetTest } = useContext(TestContext);
  
  // 计算结果（如果尚未计算）
  useEffect(() => {
    if (Object.keys(answers).length > 0 && !results) {
      const calculatedResults = calculateResults(answers);
      setResults(calculatedResults);
    } else if (Object.keys(answers).length === 0) {
      // 如果没有答案数据，重定向到问卷页面
      navigate('/questionnaire');
    }
  }, [answers, results, setResults, navigate]);
  
  if (!results) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-pink-50">
        <div className="text-center">
          <div className="w-16 h-16 border-4 border-pink-200 border-t-pink-400 rounded-full animate-spin mx-auto mb-4"></div>
          <p className="text-gray-600">正在分析您的结果...</p>
        </div>
      </div>
    );
  }
  
  // 准备结果数据
  const { typeScores, approachScores, combinationScores } = results;
  
   // 筛选反差类型结果（得分>14）
  const typeResults = [
    {
      id: "clothing",
      title: "衣着反差",
      description: "脱掉“穿在身上的遮挡”→ 涉及外在形象、服饰、身体的暴露感。",
      score: typeScores["衣着反差"]
    },
    {
      id: "identity",
      title: "身份反差",
      description: "摘下“正经社交的面具”→ 涉及平时严肃/理智/专业的外在形象与游戏形象的反差感。",
      score: typeScores["身份反差"]
    },
    {
      id: "thought",
      title: "想法反差",
      description: "暴露“藏起来的小心思”→ 涉及隐秘的欲望、幻想、弱点被察觉或暴露的心理赤裸感。",
      score: typeScores["想法反差"]
    }
  ].filter(item => item.score && item.score > 14);
  
   // 筛选方式结果（得分>14）
  const approachResults = [
    {
      id: "atmosphere",
      title: "氛围",
      description: "沉默的施压，通过环境、仪式感、情境设定等方式让人自然进入羞耻状态。例如只留一束聚光灯、安静房间里脚步声很响，沉默的注视与等待。",
      score: approachScores["氛围"]
    },
    {
      id: "language",
      title: "语言",
      description: "通过称呼、直接描述、逼问、挑逗话语触发羞涩的感觉。例如直白的称呼、逼问想法、重复自己的小心思。",
      score: approachScores["语言"]
    },
    {
      id: "body",
      title: "身体",
      description: "借由动作（触碰、姿势引导、身体限制、佩戴道具）制造被迫感与无处可逃感。例如下巴被抬起后直视目光、被引导到特定姿势等。",
      score: approachScores["身体"]
    }
  ].filter(item => item.score && item.score > 14);
  
  // 筛选组合结果（得分>144且最高）
  const combinationEntries = Object.entries(combinationScores);
  const maxCombinationScore = Math.max(...combinationEntries.map(([_, score]) => score));
  const combinationResults = combinationEntries
    .filter(([_, score]) => score > 144 && score === maxCombinationScore)
    .map(([key, score]) => {
      // 组合描述映射
      const combinationDescriptions: Record<string, string> = {
        "氛围*衣着反差": "害羞来源于“被看见变化”的过程，喜欢由包裹到暴露的对比感。",
        "语言*衣着反差": "语言是启动器，命令或描述让你感到被关注和掌控。",
        "身体*衣着反差": "肢体接触直接触发害羞和兴奋，比视觉刺激更强烈。",
        "氛围*身份反差": "喜欢被从日常权威或独立的角色，放置到柔弱/顺从的位置。",
        "语言*身份反差": "喜欢语言打破社交面具，让你完全变成“另一种人”。",
        "身体*身份反差": "用身体动作打破日常形象，让你切换成被动模式。",
        "氛围*想法反差": "被无声地“看透”让你心虚，感到内心慌乱。",
        "语言*想法反差": "直白揭穿内心的小欲望会让你羞到想逃。",
        "身体*想法反差": "通过肢体的强势强迫你面对自己的欲望。"
      };
      
      // 格式化标题
      const titleParts = key.split('*');
      return {
        id: key,
        title: `${titleParts[0]} + ${titleParts[1]}`,
        description: combinationDescriptions[key] || "",
        score
      };
    });
  
  // 分享功能
  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: "每一种好奇值得被认真探索",
        text: "我发现了自己独特的一面，你也来试试吧！",
        url: window.location.href
      }).catch(err => console.log('分享失败:', err));
    } else {
      // 复制链接到剪贴板
      navigator.clipboard.writeText(window.location.href)
        .then(() => alert('链接已复制到剪贴板，可以分享给朋友了！'))
        .catch(err => console.log('复制失败:', err));
    }
  };
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 font-sans">
      {/* 顶部导航 */}
      <div className="flex justify-between items-center mb-8">
        <button
          onClick={() => navigate('/questionnaire')}
          className="text-gray-500 hover:text-pink-400 transition-colors"
        >
          <i className="fa-solid fa-arrow-left"></i>
        </button>
        <h1 className="text-xl font-medium text-gray-700">探索结果</h1>
        <button
          onClick={resetTest}
          className="text-gray-500 hover:text-pink-400 transition-colors"
        >
          <i className="fa-solid fa-refresh"></i>
        </button>
      </div>
      
      {/* 结果内容区 */}
      <div className="max-w-md mx-auto">
        {/* 结果标题 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl font-bold text-gray-800 mb-3">你的羞涩探索报告</h2>
          <div className="w-20 h-1 bg-pink-300 mx-auto rounded-full"></div>
        </motion.div>
        
        {/* 反差类型结果区块 */}
        <ResultSection
          title="什么样的反差令你心动"
          items={typeResults}
          icon="fa-heart"
          color="bg-pink-200 text-pink-600"
        />
        
        {/* 方式结果区块 */}
        <ResultSection
          title="什么样的方式能强化你的感受"
          items={approachResults}
          icon="fa-star"
          color="bg-purple-200 text-purple-600"
        />
        
        {/* 瓶子图示区块 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <BottleVisualization results={results} />
        </motion.div>
        
        {/* 最喜欢的组合区块 */}
        <ResultSection
          title="我最喜欢的组合"
          items={combinationResults}
          icon="fa-diamond"
          color="bg-yellow-200 text-yellow-600"
        />
        
        {/* 分享按钮 */}
        <motion.button
          onClick={handleShare}
          className="w-full bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white font-medium py-4 px-6 rounded-full shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2 mt-6 mb-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          <i className="fa-solid fa-share-alt mr-2"></i>
          分享我的探索结果
        </motion.button>
       </div>
       
       {/* 页脚设计信息 */}
       <div className="text-center text-pink-400 text-sm font-medium mt-12 pt-4 border-t border-pink-100">
         <i className="fa-solid fa-heart mr-1"></i>Designed by 阿狸&边边
       </div>
     </div>
  );
}