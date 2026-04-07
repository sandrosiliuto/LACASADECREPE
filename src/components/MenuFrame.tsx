import { motion } from 'motion/react';
import { ReactNode } from 'react';

const icons = ['🥞', '🍓', '🍫', '☕', '🥗', '🥓', '🍳', '🥤', '🍺', '🍷', '🥑', '🧀'];

export const MenuFrame = ({ children }: { children: ReactNode }) => {
  return (
    <div className="relative min-h-screen p-4 md:p-8">
      {/* Decorative Border with Icons */}
      <div className="fixed inset-0 pointer-events-none z-40 border-[12px] border-[#4A2C2A]/10 rounded-[40px]" />
      
      {/* Top Icons */}
      <div className="fixed top-2 left-0 w-full flex justify-around px-8 z-40 pointer-events-none overflow-hidden h-10">
        {icons.map((icon, i) => (
          <motion.span
            key={`top-${i}`}
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="text-xl"
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Bottom Icons */}
      <div className="fixed bottom-2 left-0 w-full flex justify-around px-8 z-40 pointer-events-none overflow-hidden h-10">
        {icons.reverse().map((icon, i) => (
          <motion.span
            key={`bottom-${i}`}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="text-xl"
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Left Icons */}
      <div className="fixed left-2 top-0 h-full flex flex-col justify-around py-8 z-40 pointer-events-none overflow-hidden w-10">
        {icons.map((icon, i) => (
          <motion.span
            key={`left-${i}`}
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="text-xl"
          >
            {icon}
          </motion.span>
        ))}
      </div>

      {/* Right Icons */}
      <div className="fixed right-2 top-0 h-full flex flex-col justify-around py-8 z-40 pointer-events-none overflow-hidden w-10">
        {icons.reverse().map((icon, i) => (
          <motion.span
            key={`right-${i}`}
            initial={{ x: 20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: i * 0.05 }}
            className="text-xl"
          >
            {icon}
          </motion.span>
        ))}
      </div>

      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};
