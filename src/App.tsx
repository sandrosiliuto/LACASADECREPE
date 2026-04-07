/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { ReactNode } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'motion/react';
import { Menu as MenuIcon, MapPin, MessageCircle, Home as HomeIcon } from 'lucide-react';
import { ChocolateDrip } from './components/ChocolateDrip';
import { MenuFrame } from './components/MenuFrame';
import { SoundProvider, useSound } from './components/SoundManager';
import { CONTACT_INFO } from './constants';
import Home from './pages/Home';
import Menu from './pages/Menu';
import Contact from './pages/Contact';

function Nav() {
  const location = useLocation();
  const { playPop } = useSound();

  const navItems = [
    { path: '/', label: 'Inicio', icon: HomeIcon },
    { path: '/menu', label: 'Menú', icon: MenuIcon },
    { path: '/contacto', label: 'Contacto', icon: MapPin },
  ];

  return (
    <nav className="fixed bottom-10 left-1/2 -translate-x-1/2 bg-[#4A2C2A]/90 backdrop-blur-md px-6 py-3 rounded-full border-2 border-[#F5E6D3]/20 shadow-2xl z-50 flex items-center gap-8">
      {navItems.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          onClick={() => playPop()}
          className="relative group flex flex-col items-center"
        >
          <item.icon className={`w-6 h-6 transition-colors ${location.pathname === item.path ? 'text-[#F5E6D3]' : 'text-[#F5E6D3]/50 group-hover:text-[#F5E6D3]'}`} />
          <span className={`text-[10px] uppercase font-black tracking-widest mt-1 transition-colors ${location.pathname === item.path ? 'text-[#F5E6D3]' : 'text-[#F5E6D3]/50 group-hover:text-[#F5E6D3]'}`}>
            {item.label}
          </span>
          {location.pathname === item.path && (
            <motion.div
              layoutId="nav-active"
              className="absolute -bottom-1 w-1 h-1 bg-[#F5E6D3] rounded-full"
            />
          )}
        </Link>
      ))}
    </nav>
  );
}

function Layout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen text-[#4A2C2A] font-sans selection:bg-[#4A2C2A] selection:text-[#F5E6D3]">
      <MenuFrame>
        <ChocolateDrip />
        
        <header className="pt-24 pb-12 px-6 flex flex-col items-center relative overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 12 }}
            className="relative z-10"
          >
            <div className="w-40 h-40 bg-white rounded-full flex items-center justify-center border-8 border-[#4A2C2A] shadow-2xl overflow-hidden">
              <img 
                src="https://raw.githubusercontent.com/sandrosiliuto/LACASADELCREPE/main/logo.jpg" 
                alt="La Casa del Crepe Logo"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://picsum.photos/seed/crepe/200/200';
                }}
                referrerPolicy="no-referrer"
              />
            </div>
          </motion.div>
          
          <motion.h1
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="mt-6 text-5xl md:text-7xl font-black uppercase tracking-tighter text-center text-shadow-cartoon"
          >
            La Casa del Crepe
          </motion.h1>
          <motion.p
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl font-bold opacity-70 tracking-[0.3em] uppercase mt-2"
          >
            Menú de Bebidas y Comidas
          </motion.p>
        </header>

        <main className="pb-40">
          <AnimatePresence mode="wait">
            {children}
          </AnimatePresence>
        </main>

        <Nav />

        <motion.a
          href={CONTACT_INFO.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
          className="fixed bottom-28 right-10 bg-[#25D366] text-white p-5 rounded-full shadow-2xl z-40 flex items-center justify-center border-4 border-white"
        >
          <MessageCircle className="w-8 h-8" />
        </motion.a>
      </MenuFrame>
    </div>
  );
}

export default function App() {
  return (
    <SoundProvider>
      <Router>
        <Layout>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/menu" element={<Menu />} />
            <Route path="/contacto" element={<Contact />} />
          </Routes>
        </Layout>
      </Router>
    </SoundProvider>
  );
}
