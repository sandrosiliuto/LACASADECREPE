import { motion } from 'motion/react';

export default function Menu() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-7xl mx-auto"
    >
      <div className="relative flex items-center justify-center gap-4 px-4 md:px-0">
        {/* Left Logo (Desktop) */}
        <motion.div 
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden lg:block w-32 h-32 flex-shrink-0"
        >
          <img 
            src="https://raw.githubusercontent.com/sandrosiliuto/LACASADELCREPE/main/logo.jpg" 
            alt="Logo Left" 
            className="w-full h-full object-contain rounded-full border-4 border-[#4A2C2A] shadow-xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>

        {/* Main Menu Image */}
        <div className="flex-1 relative bg-white shadow-2xl overflow-hidden border-4 md:border-8 border-[#4A2C2A] rounded-3xl md:rounded-[60px]">
          <img 
            src="https://raw.githubusercontent.com/sandrosiliuto/LACASADELCREPE/main/cartacompletaSMALL.png" 
            alt="Carta Completa La Casa del Crepe" 
            className="w-full h-auto block"
            referrerPolicy="no-referrer"
          />
        </div>

        {/* Right Logo (Desktop) */}
        <motion.div 
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          className="hidden lg:block w-32 h-32 flex-shrink-0"
        >
          <img 
            src="https://raw.githubusercontent.com/sandrosiliuto/LACASADELCREPE/main/logo.jpg" 
            alt="Logo Right" 
            className="w-full h-full object-contain rounded-full border-4 border-[#4A2C2A] shadow-xl"
            referrerPolicy="no-referrer"
          />
        </motion.div>
      </div>
      
      <div className="mt-12 text-center pb-20 px-6">
        <p className="text-2xl font-black uppercase tracking-widest opacity-30">
          Desliza para ver todo el menú
        </p>
      </div>
    </motion.div>
  );
}
