import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

export default function Welcome() {
  const navigate = useNavigate();
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-pink-50 to-white p-6 font-sans">
      {/* 顶部装饰元素 */}
      <div className="flex justify-center mb-8 pt-4">
        <div className="w-24 h-2 bg-pink-200 rounded-full"></div>
      </div>
      
      {/* 主内容区 */}
      <div className="max-w-md mx-auto">
        {/* 标题 */}
        <motion.h1 
          className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-8 leading-tight"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          每一种好奇值得被认真探索
        </motion.h1>
        
        {/* 介绍图片 */}
        <div className="flex justify-center mb-10">
          <motion.div 
            className="w-48 h-48 relative"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <img 
              src="https://space.coze.cn/api/coze_space/gen_image?image_size=square&prompt=cute%20illustration%20of%20curious%20character%20exploring%20with%20soft%20colors&sign=fd28aa43d8ab16f3d37ccd048067fca6" 
              alt="探索好奇的插画" 
              className="w-full h-full object-contain rounded-full border-4 border-pink-100 shadow-lg"
            />
          </motion.div>
        </div>
        
        {/* 介绍文本 */}
        <motion.div 
          className="bg-white rounded-2xl p-8 shadow-md mb-10 border border-pink-100"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <p className="text-gray-700 leading-relaxed mb-4">
            如果你偶尔会喜欢羞涩的感觉
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            我们想，和你一起认真看见其中一面的自己
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            因什么触动，被什么唤起，为什么沉迷
          </p>
          <p className="text-gray-700 leading-relaxed font-medium text-center mt-6">
            别怕，它只是具体的感受而已。
          </p>
        </motion.div>
        
        {/* 开始测试按钮 */}
        <motion.button
          onClick={() => navigate('/questionnaire')}
          className="w-full bg-gradient-to-r from-pink-300 to-purple-300 hover:from-pink-400 hover:to-purple-400 text-white font-medium py-4 px-6 rounded-full shadow-lg transform transition hover:scale-105 focus:outline-none focus:ring-2 focus:ring-pink-200 focus:ring-offset-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.98 }}
        >
          开始探索之旅
          <i className="fa-solid fa-arrow-right ml-2"></i>
        </motion.button>
        
        {/* 底部装饰 */}
         <div className="flex justify-center mt-16">
           <div className="w-16 h-1 bg-purple-200 rounded-full"></div>
         </div>
         
         {/* 页脚设计信息 */}
          <div className="text-center text-pink-400 text-sm font-medium mt-12 pt-4 border-t border-pink-100">
            <i className="fa-solid fa-heart mr-1"></i>Designed by 阿狸&边边
          </div>
        </div>
    </div>
  );
}