import { motion } from 'motion/react';
import { useSound } from '../components/SoundManager';
import { Link } from 'react-router-dom';
import { ArrowRight, Utensils, Coffee, Star } from 'lucide-react';

export default function Home() {
  const { playBell, playFrying } = useSound();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 max-w-4xl mx-auto"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Hero Card */}
        <motion.div
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
          className="bg-white p-8 rounded-[40px] shadow-xl border-4 border-[#4A2C2A] relative overflow-hidden group"
        >
          <div className="relative z-10">
            <h2 className="text-4xl font-black uppercase leading-none text-shadow-cartoon">
              ¡Bienvenidos a la <span className="text-[#4A2C2A]">dulce</span> locura!
            </h2>
            <p className="mt-4 text-xl font-bold opacity-80">
              Los mejores crepes de El Médano, hechos con amor y un toque de magia.
            </p>
            <Link 
              to="/menu"
              onClick={() => playBell()}
              className="mt-8 inline-flex items-center gap-2 bg-[#4A2C2A] text-[#F5E6D3] px-8 py-4 rounded-full font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-lg"
            >
              Ver Menú <ArrowRight className="w-5 h-5" />
            </Link>
          </div>
          
          {/* Decorative elements */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
            className="absolute -right-12 -bottom-12 opacity-10"
          >
            <Utensils size={200} />
          </motion.div>
        </motion.div>

        {/* Feature Grid */}
        <div className="grid grid-cols-2 gap-4">
          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5 }}
            onMouseEnter={() => playFrying()}
            className="bg-[#4A2C2A] text-[#F5E6D3] p-6 rounded-[30px] flex flex-col justify-between aspect-square shadow-xl border-4 border-white"
          >
            <Coffee className="w-10 h-10" />
            <div>
              <h3 className="font-black uppercase text-2xl tracking-tighter">Café Pro</h3>
              <p className="text-sm font-bold opacity-70">El mejor grano de la isla</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
            className="bg-white p-6 rounded-[30px] flex flex-col justify-between aspect-square border-4 border-[#4A2C2A] shadow-xl"
          >
            <Star className="w-10 h-10 text-yellow-500 fill-yellow-500" />
            <div>
              <h3 className="font-black uppercase text-2xl tracking-tighter">Top Rated</h3>
              <p className="text-sm font-bold opacity-70">Favoritos en TripAdvisor</p>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Interactive Crepe Section */}
      <motion.div
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-12 bg-white p-12 rounded-[50px] shadow-2xl border-4 border-[#4A2C2A] text-center relative overflow-hidden"
      >
        <motion.div
          animate={{ 
            y: [0, -15, 0],
            rotate: [0, 3, -3, 0]
          }}
          transition={{ duration: 5, repeat: Infinity }}
          className="inline-block"
        >
          <img 
            src="https://raw.githubusercontent.com/sandrosiliuto/LACASADELCREPE/main/CARAA.png" 
            alt="Delicious Crepe" 
            className="w-80 h-60 object-cover rounded-3xl shadow-2xl border-4 border-[#4A2C2A]"
            referrerPolicy="no-referrer"
          />
        </motion.div>
        <h3 className="mt-8 text-5xl font-black uppercase tracking-tighter text-shadow-cartoon">
          Artesanía en cada bocado
        </h3>
        <p className="mt-4 max-w-xl mx-auto text-xl font-bold opacity-80">
          Desde los clásicos de chocolate hasta nuestras creaciones saladas más atrevidas.
        </p>

        {/* Google Reviews Button */}
        <div className="mt-8 flex justify-center">
          <motion.a
            href="https://www.google.com/search?sca_esv=7d9c60e3220b4d37&sxsrf=ANbL-n4Jz35DB2iv5rz-HxMxV3BwBEIrQQ:1779800742735&q=La+Casa+de+Cr%C3%AApe+Rese%C3%B1as&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxK2MDc3NTQwN7MwMjM0MjI3tjC22MDI-IpRyidRwTmxOFEhJVXBuejwqoJUhaDU4tTDGxOLF7HikQQA2j88AFQAAAA&rldimm=8775107682612273838&tbm=lcl&hl=es-ES&sa=X&ved=2ahUKEwi9k6q4gteUAxXFQUEAHRCcE9MQ9fQKegQINhAG#lkt=LocalPoiReviews"
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => playBell()}
            whileHover={{ scale: 1.08, rotate: [0, -1, 1, 0] }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-2 bg-[#4A2C2A] text-[#F5E6D3] px-10 py-5 rounded-full font-black uppercase tracking-widest hover:bg-[#5C3A38] transition-colors shadow-2xl border-4 border-white text-base md:text-lg cursor-pointer"
          >
            <span className="text-yellow-400">★</span>
            ✨ Déjanos una reseña ✨
            <span className="text-yellow-400">★</span>
          </motion.a>
        </div>
      </motion.div>

    </motion.div>
  );
}
