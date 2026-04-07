import { motion } from 'motion/react';

export const ChocolateDrip = () => {
  return (
    <div className="absolute top-0 left-0 w-full h-32 overflow-hidden pointer-events-none z-50">
      <div className="flex justify-around w-full items-start">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            initial={{ y: -120 }}
            animate={{ y: 0 }}
            transition={{
              duration: 1.2,
              delay: i * 0.08,
              type: "spring",
              stiffness: 40
            }}
            className="w-10 bg-[#4A2C2A] rounded-b-[40px] relative shadow-lg"
            style={{
              height: `${Math.random() * 60 + 50}px`,
              marginLeft: `${Math.random() * 5 - 2}px`
            }}
          >
            {/* Gooey drop at the end */}
            <motion.div
              animate={{
                scaleY: [1, 1.15, 1],
                y: [0, 8, 0]
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: i * 0.3
              }}
              className="absolute bottom-[-10px] left-1/2 -translate-x-1/2 w-8 h-12 bg-[#4A2C2A] rounded-full shadow-md"
            />
          </motion.div>
        ))}
      </div>
      {/* Connecting top bar */}
      <div className="absolute top-0 left-0 w-full h-12 bg-[#4A2C2A]" />
    </div>
  );
};
