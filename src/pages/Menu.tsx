import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import { useSound } from '../components/SoundManager';
import { cn } from '../lib/utils';

export default function Menu() {
  const [lang, setLang] = useState<'es' | 'en'>('es');
  const { playPop, playBell } = useSound();

  const handleLangToggle = (selectedLang: 'es' | 'en') => {
    setLang(selectedLang);
    playBell();
  };

  const menuImageUrl = lang === 'es'
    ? 'https://raw.githubusercontent.com/sandrosiliuto/LACASADECREPE/main/images/menuspain.png'
    : 'https://raw.githubusercontent.com/sandrosiliuto/LACASADECREPE/main/images/menuenglish.png';

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="w-full max-w-7xl mx-auto px-4"
    >
      {/* Title & Header */}
      <div className="text-center mb-10">
        <motion.h2 
          className="text-5xl md:text-6xl font-black uppercase tracking-tight text-shadow-cartoon mb-4"
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
        >
          {lang === 'es' ? "Nuestro Menú" : "Our Menu"}
        </motion.h2>
        <p className="text-xl font-bold opacity-70 italic max-w-xl mx-auto">
          {lang === 'es' 
            ? "Disfruta de nuestra carta con la identidad y el sabor artesanal de siempre."
            : "Enjoy our menu with the craft identity and traditional flavor you love."}
        </p>

        {/* Language Switcher */}
        <div className="flex justify-center mt-8">
          <div className="bg-[#4A2C2A]/10 p-1.5 rounded-full flex gap-2 border-2 border-[#4A2C2A]/20">
            <button
              onClick={() => handleLangToggle('es')}
              className={cn(
                "px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer",
                lang === 'es' 
                  ? "bg-[#4A2C2A] text-[#F5E6D3] shadow-lg"
                  : "hover:bg-[#4A2C2A]/10 text-[#4A2C2A]"
              )}
            >
              <span>🇪🇸</span> Español
            </button>
            <button
              onClick={() => handleLangToggle('en')}
              className={cn(
                "px-6 py-2 rounded-full font-black text-sm uppercase tracking-wider transition-all flex items-center gap-2 cursor-pointer",
                lang === 'en' 
                  ? "bg-[#4A2C2A] text-[#F5E6D3] shadow-lg"
                  : "hover:bg-[#4A2C2A]/10 text-[#4A2C2A]"
              )}
            >
              <span>🇺🇸</span> English
            </button>
          </div>
        </div>
      </div>

      {/* Menu Image Container - Full Bleed with side logos */}
      <div className="relative flex items-center justify-center gap-4 px-4 md:px-0">
        {/* Left Logo (Desktop Only) */}
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

        {/* Main Menu Image Frame */}
        <div className="flex-1 relative bg-white shadow-2xl overflow-hidden border-4 md:border-8 border-[#4A2C2A] rounded-3xl md:rounded-[60px]">
          <AnimatePresence mode="wait">
            <motion.img 
              key={lang}
              src={menuImageUrl} 
              alt={lang === 'es' ? "Menú en Español" : "Menu in English"}
              className="w-full h-auto block"
              referrerPolicy="no-referrer"
              initial={{ opacity: 0, scale: 0.98 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.98 }}
              transition={{ duration: 0.25 }}
            />
          </AnimatePresence>
        </div>

        {/* Right Logo (Desktop Only) */}
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
          {lang === 'es' ? "Desliza para ver todo el menú" : "Scroll to see the full menu"}
        </p>
      </div>
    </motion.div>
  );
}
