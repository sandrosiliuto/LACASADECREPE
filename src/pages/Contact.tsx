import { motion } from 'motion/react';
import { Phone, MapPin, Instagram, Facebook, MessageCircle, Clock, ExternalLink } from 'lucide-react';
import { CONTACT_INFO } from '../constants';
import { useSound } from '../components/SoundManager';

export default function Contact() {
  const { playBell } = useSound();

  const contactItems = [
    { 
      icon: Phone, 
      label: 'Llámanos', 
      value: CONTACT_INFO.phone, 
      href: `tel:${CONTACT_INFO.phone.replace(/\s/g, '')}`,
      color: 'bg-blue-500'
    },
    { 
      icon: MessageCircle, 
      label: 'WhatsApp', 
      value: 'Reservas y Pedidos', 
      href: CONTACT_INFO.whatsapp,
      color: 'bg-[#25D366]'
    },
    { 
      icon: Instagram, 
      label: 'Instagram', 
      value: '@lacasadelcrepeelmedano', 
      href: CONTACT_INFO.instagram,
      color: 'bg-gradient-to-tr from-yellow-400 via-red-500 to-purple-600'
    },
    { 
      icon: Facebook, 
      label: 'Facebook', 
      value: 'La Casa del Crepe', 
      href: CONTACT_INFO.facebook,
      color: 'bg-[#1877F2]'
    },
  ];

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="px-6 max-w-4xl mx-auto"
    >
      <div className="flex flex-col items-center gap-8">
        {/* Contact Info */}
        <div className="w-full space-y-6">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
            className="bg-white p-10 rounded-[50px] shadow-2xl border-4 border-[#4A2C2A] text-center"
          >
            <h2 className="text-4xl font-black uppercase tracking-tighter mb-10 text-shadow-cartoon">
              ¿Dónde estamos?
            </h2>
            <div className="flex flex-col md:flex-row justify-center gap-12">
              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#4A2C2A] p-4 rounded-2xl shadow-lg">
                  <MapPin className="w-8 h-8 text-[#F5E6D3]" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm opacity-50 tracking-widest">Dirección</h4>
                  <p className="text-xl font-bold">{CONTACT_INFO.address}</p>
                  <a 
                    href={CONTACT_INFO.location}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-sm font-black uppercase tracking-[0.2em] text-[#4A2C2A] mt-3 hover:underline"
                  >
                    Abrir en Maps <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>

              <div className="flex flex-col items-center gap-4">
                <div className="bg-[#4A2C2A] p-4 rounded-2xl shadow-lg">
                  <Clock className="w-8 h-8 text-[#F5E6D3]" />
                </div>
                <div>
                  <h4 className="font-black uppercase text-sm opacity-50 tracking-widest">Horario</h4>
                  <p className="text-xl font-bold">Lunes a Domingo</p>
                  <p className="text-lg font-bold opacity-70">09:30 - 22:30</p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Social Grid */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {contactItems.map((item, i) => (
              <motion.a
                key={i}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 + i * 0.1 }}
                onClick={() => playBell()}
                className="bg-white p-6 rounded-[35px] border-4 border-[#4A2C2A]/10 hover:border-[#4A2C2A] transition-all group shadow-lg hover:shadow-2xl flex flex-col items-center text-center"
              >
                <div className={`${item.color} w-12 h-12 rounded-2xl flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform shadow-md`}>
                  <item.icon className="w-6 h-6" />
                </div>
                <h4 className="font-black uppercase text-[10px] opacity-50 tracking-widest">{item.label}</h4>
                <p className="text-sm font-black truncate w-full">{item.value}</p>
              </motion.a>
            ))}
          </div>
        </div>
      </div>

      {/* Footer Quote */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        className="mt-20 text-center pb-20"
      >
        <p className="text-3xl font-black uppercase italic opacity-20 tracking-tighter text-shadow-cartoon">
          "Donde cada crepe cuenta una historia"
        </p>
      </motion.div>
    </motion.div>
  );
}
