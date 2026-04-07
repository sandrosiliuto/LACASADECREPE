import { motion } from 'motion/react';
import { useState, SVGProps } from 'react';
import { MENU_DATA, CONTACT_INFO } from '../constants';
import { useSound } from '../components/SoundManager';
import { cn } from '../lib/utils';
import { Coffee, Utensils, IceCream, Salad, GlassWater } from 'lucide-react';

const CATEGORIES = [
  { id: 'ensaladas', label: 'Ensaladas', icon: Salad },
  { id: 'crepesSalados', label: 'Crepes Salados', icon: Utensils },
  { id: 'nachos', label: 'Nachos', icon: Utensils },
  { id: 'crepesDulces', label: 'Crepes Dulces', icon: IceCream },
  { id: 'crepesDulcesEspeciales', label: 'Dulces Especiales', icon: StarIcon },
  { id: 'brunch', label: 'Brunch', icon: Coffee },
  { id: 'tostadas', label: 'Tostadas', icon: Utensils },
  { id: 'bebidas', label: 'Bebidas', icon: GlassWater },
];

function StarIcon(props: SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  );
}

export default function Menu() {
  const [activeCategory, setActiveCategory] = useState('ensaladas');
  const { playPop, playBell } = useSound();

  const handleCategoryChange = (id: string) => {
    setActiveCategory(id);
    playPop();
  };

  const renderItems = () => {
    const data = (MENU_DATA as any)[activeCategory];

    if (activeCategory === 'crepesSalados') {
      return (data as any[]).map((section, idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-4 text-shadow-cartoon">
            <div className="w-12 h-2 bg-[#4A2C2A] rounded-full" />
            {section.category}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {section.items.map((item: any, i: number) => (
              <MenuItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      ));
    }

    if (activeCategory === 'bebidas') {
      return Object.entries(data).map(([subCat, items]: [string, any], idx) => (
        <div key={idx} className="mb-12">
          <h3 className="text-3xl font-black uppercase tracking-tighter mb-6 flex items-center gap-4 text-shadow-cartoon">
            <div className="w-12 h-2 bg-[#4A2C2A] rounded-full" />
            {subCat.replace(/([A-Z])/g, ' $1').trim()}
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {items.map((item: any, i: number) => (
              <MenuItem key={i} item={item} index={i} />
            ))}
          </div>
        </div>
      ));
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {(data as any[]).map((item, i) => (
          <MenuItem key={i} item={item} index={i} />
        ))}
      </div>
    );
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 max-w-5xl mx-auto"
    >
      {/* Category Selector */}
      <div className="flex overflow-x-auto gap-4 pb-12 pt-4 no-scrollbar -mx-6 px-6">
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            onClick={() => handleCategoryChange(cat.id)}
            className={cn(
              "flex-shrink-0 flex items-center gap-2 px-8 py-4 rounded-full font-black uppercase tracking-widest transition-all border-4",
              activeCategory === cat.id
                ? "bg-[#4A2C2A] text-[#F5E6D3] border-[#4A2C2A] shadow-xl scale-105"
                : "bg-white text-[#4A2C2A] border-[#4A2C2A]/10 hover:border-[#4A2C2A]/30"
            )}
          >
            <cat.icon className="w-5 h-5" />
            {cat.label}
          </button>
        ))}
      </div>

      {/* Menu Content */}
      <motion.div
        key={activeCategory}
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.4 }}
        className="mt-8"
      >
        {renderItems()}
      </motion.div>

      {/* Order CTA */}
      <motion.div
        initial={{ scale: 0.9, opacity: 0 }}
        whileInView={{ scale: 1, opacity: 1 }}
        className="mt-20 p-12 bg-[#4A2C2A] text-[#F5E6D3] rounded-[60px] text-center shadow-2xl relative overflow-hidden border-8 border-white"
      >
        <div className="relative z-10">
          <h3 className="text-4xl font-black uppercase text-shadow-cartoon">¿Quieres ver nuestro menú completo?</h3>
          <motion.a
            href="https://github.com/sandrosiliuto/LACASADELCREPE/blob/main/cartacompletaSMALL.png"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playBell()}
            className="mt-8 inline-block bg-[#F5E6D3] text-[#4A2C2A] px-12 py-5 rounded-full font-black uppercase tracking-[0.2em] hover:scale-105 transition-transform shadow-2xl border-4 border-[#4A2C2A]"
          >
            Pincha Aquí
          </motion.a>
        </div>
        
        {/* Decorative Drips */}
        <div className="absolute top-0 left-0 w-full flex justify-around opacity-20">
          {[...Array(12)].map((_, i) => (
            <div key={i} className="w-6 h-16 bg-[#F5E6D3] rounded-b-full" style={{ height: `${Math.random() * 60 + 30}px` }} />
          ))}
        </div>
      </motion.div>
    </motion.div>
  );
}

function MenuItem({ item, index }: any) {
  return (
    <motion.div
      initial={{ x: index % 2 === 0 ? -20 : 20, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay: index * 0.05 }}
      className="bg-white p-8 rounded-[40px] border-4 border-[#4A2C2A]/10 hover:border-[#4A2C2A] transition-all group shadow-lg hover:shadow-2xl"
    >
      <div className="flex justify-between items-start gap-4">
        <div className="flex-1">
          <h4 className="font-black uppercase text-2xl group-hover:text-[#4A2C2A] transition-colors tracking-tight">
            {item.name}
          </h4>
          {item.description && (
            <p className="text-lg font-bold opacity-60 mt-2 leading-tight">
              {item.description}
            </p>
          )}
        </div>
        <div className="bg-[#F5E6D3] px-4 py-2 rounded-2xl font-black text-lg text-[#4A2C2A] border-2 border-[#4A2C2A]/10 shadow-sm">
          {item.price}
        </div>
      </div>
    </motion.div>
  );
}
