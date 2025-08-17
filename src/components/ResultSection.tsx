import { motion } from "framer-motion";

interface ResultSectionProps {
  title: string;
  items: { id: string; title: string; description: string; score?: number }[];
  icon: string;
  color: string;
}

export default function ResultSection({ title, items, icon, color }: ResultSectionProps) {
  if (items.length === 0) return null;
  
  return (
    <motion.div
      className="mb-10"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h2 className="text-xl font-bold mb-6 flex items-center">
        <span className={`w-8 h-8 rounded-full ${color} flex items-center justify-center text-white mr-3`}>
          <i className={icon}></i>
        </span>
        {title}
      </h2>
      
      <div className="space-y-4">
        {items.map((item, index) => (
          <motion.div
            key={item.id}
            className="bg-white rounded-xl p-5 shadow-sm border border-gray-100"
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            <h3 className="font-medium text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}