import React, { useState, useEffect } from 'react';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { ArrowRight, Star } from 'lucide-react';
import { Link } from 'react-router-dom';
import Section from '../components/Section';

const featuredDishes = [
  { id: 1, name: "Neon Maguro", image: "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop", desc: "Atún rojo, perlas de soja, pan de oro" },
  { id: 2, name: "Quantum Ebi", image: "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop", desc: "Camarón dulce, espuma de yuzu, nitrógeno" },
  { id: 3, name: "Void Roll", image: "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=800&auto=format&fit=crop", desc: "Arroz al carbón, vieira picante, emulsión uni" },
  { id: 4, name: "Cyber Salmon", image: "/images/Cybersalmon.jpg", desc: "Vientre de salmón, aceite de trufa, shiso" },
];

const Home: React.FC = () => {
  const [activeDish, setActiveDish] = useState<number | null>(null);

  // Mouse parallax logic
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springConfig = { damping: 30, stiffness: 200 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      // Calculate mouse position relative to center (-0.5 to 0.5)
      const x = e.clientX / innerWidth - 0.5;
      const y = e.clientY / innerHeight - 0.5;

      // Update motion values
      mouseX.set(x * 30); // Move background 30px
      mouseY.set(y * 30);
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="relative h-screen w-full flex items-center justify-center overflow-hidden bg-shinsei-black">

        {/* Layer 1: Interactive Background (Visible Parallax) */}
        <motion.div
          className="absolute inset-0 z-0"
          style={{ x: springX, y: springY, scale: 1.1 }}
        >
          <div className="absolute inset-0 bg-black/60 z-10" /> {/* Overlay to ensure text readability */}
          <img
            src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1920&auto=format&fit=crop"
            alt="Fondo Sushi"
            className="w-full h-full object-cover opacity-60"
          />
        </motion.div>

        {/* Layer 2: Subtle Particles / Floating Elements */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-64 h-64 bg-shinsei-red/10 rounded-full blur-3xl z-10"
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity }}
        />
        <motion.div
          className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-white/5 rounded-full blur-3xl z-10"
          animate={{ scale: [1.2, 1, 1.2], opacity: [0.2, 0.4, 0.2] }}
          transition={{ duration: 10, repeat: Infinity }}
        />

        {/* Layer 3: Content */}
        <div className="relative z-20 text-center px-4 max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 50, filter: 'blur(10px)' }}
            animate={{ opacity: 1, y: 0, filter: 'blur(0px)' }}
            transition={{ duration: 1.2, ease: "easeOut", delay: 0.5 }}
          >
            <div className="flex flex-col items-center">
              {/* Logo Animation */}
              <motion.div
                initial={{ scale: 0, rotate: -45 }}
                animate={{ scale: 1, rotate: 45 }}
                transition={{ duration: 0.8, ease: "backOut", delay: 0.2 }}
                className="w-16 h-16 mb-8 border-2 border-shinsei-red flex items-center justify-center shadow-[0_0_30px_rgba(232,0,60,0.4)]"
              >
                <div className="w-8 h-8 bg-shinsei-red/20 backdrop-blur-sm" />
              </motion.div>

              <h2 className="text-shinsei-red font-sans text-xs md:text-sm tracking-[0.6em] uppercase mb-6 font-bold">
                Experiencia de Sushi Experimental
              </h2>
              <h1 className="font-serif text-5xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-none mix-blend-screen text-white">
                SHINSEI
                <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20">LAB</span>
              </h1>
              <p className="font-sans text-shinsei-silver text-base md:text-lg tracking-wide max-w-xl mx-auto mb-12 font-light leading-relaxed">
                Fusionando la tradición del periodo Edo con la gastronomía molecular. <br />
                Un viaje multisensorial hacia el futuro del sabor.
              </p>

              <div className="flex flex-col md:flex-row gap-6 justify-center items-center">
                <Link to="/contact">
                  <motion.button
                    whileHover={{ scale: 1.05, backgroundColor: "#E8003C", color: "#FFF", borderColor: "#E8003C" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-white text-shinsei-black px-10 py-4 text-xs tracking-[0.2em] uppercase font-bold shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_30px_rgba(232,0,60,0.6)] transition-all duration-300 border border-transparent"
                  >
                    Reservar Mesa
                  </motion.button>
                </Link>
                <Link to="/menu">
                  <motion.button
                    whileHover={{ scale: 1.05, borderColor: "#E8003C", color: "#E8003C", boxShadow: "0 0 20px rgba(232,0,60,0.3)" }}
                    whileTap={{ scale: 0.95 }}
                    className="bg-transparent text-white border border-white/30 px-10 py-4 text-xs tracking-[0.2em] uppercase font-bold transition-all duration-300"
                  >
                    Ver Menú
                  </motion.button>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 z-20"
        >
          <span className="text-[10px] uppercase tracking-[0.3em] text-shinsei-silver text-vertical h-12">Scroll</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-shinsei-red to-transparent" />
        </motion.div>
      </section>

      {/* Featured Mosaic */}
      <Section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16">
          <div>
            <h3 className="text-shinsei-red text-xs font-bold tracking-[0.2em] uppercase mb-2 flex items-center gap-2">
              <span className="w-8 h-px bg-shinsei-red"></span>
              Creaciones del Laboratorio
            </h3>
            <h2 className="font-serif text-4xl md:text-6xl">Arte Comestible</h2>
          </div>
          <Link to="/gallery" className="group flex items-center gap-2 text-xs tracking-[0.2em] uppercase text-shinsei-silver hover:text-shinsei-red transition-colors mt-8 md:mt-0">
            Ver Galería <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[400px]">
          {featuredDishes.map((dish) => (
            <motion.div
              key={dish.id}
              className="relative group overflow-hidden h-[300px] md:h-full border border-white/5 hover:border-shinsei-red transition-colors duration-500 bg-shinsei-graphite"
              onMouseEnter={() => setActiveDish(dish.id)}
              onMouseLeave={() => setActiveDish(null)}
            >
              {/* Placeholder fallback incorporated via standard img src */}
              <img
                src={dish.image}
                alt={dish.name}
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 group-hover:brightness-110"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60 group-hover:opacity-90 transition-opacity" />

              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-[90%] h-[90%] border border-shinsei-red shadow-[0_0_20px_rgba(232,0,60,0.5)]" />
              </div>

              <div className="absolute bottom-0 left-0 w-full p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <h4 className="font-serif text-2xl mb-1 text-white group-hover:text-shinsei-red transition-colors">{dish.name}</h4>
                <div className="h-0 group-hover:h-auto overflow-hidden transition-all duration-500">
                  <p className="text-xs text-shinsei-silver mt-2 opacity-0 group-hover:opacity-100 transition-opacity delay-100 border-l border-shinsei-red pl-3">
                    {dish.desc}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* Promo Section */}
      <Section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-shinsei-graphite/30" />
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
          <div className="order-2 md:order-1 relative group">
            <div className="absolute -inset-4 border border-shinsei-red/20 rounded-full animate-[spin_20s_linear_infinite] group-hover:border-shinsei-red/50 transition-colors" />
            <div className="absolute -inset-8 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse]" />
            <div className="aspect-square rounded-full overflow-hidden border border-white/10 relative bg-shinsei-black">
              <img
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1000&auto=format&fit=crop"
                className="w-full h-full object-cover opacity-90 hover:scale-105 transition-transform duration-700"
                alt="Chef emplatando"
              />
            </div>
          </div>
          <div className="order-1 md:order-2">
            <h3 className="font-serif text-5xl md:text-7xl mb-8">Omakase <br /><span className="text-shinsei-red italic">Reinventado</span></h3>
            <p className="text-shinsei-silver mb-8 leading-loose text-lg">
              Deja que nuestro Maestro Científico te guíe a través de un viaje de 15 cursos de engaño y deleite sensorial. Usando ingredientes de temporada traídos diariamente del mercado Toyosu de Tokio, mejorados con congelación criogénica y vapores comestibles.
            </p>
            <div className="flex gap-8 items-center">
              <Link to="/menu">
                <button className="text-sm font-bold tracking-[0.2em] uppercase border-b border-shinsei-red pb-1 hover:text-shinsei-red transition-colors">
                  Descubrir el Menú
                </button>
              </Link>
              <div className="flex items-center gap-2 bg-white/5 px-4 py-2 rounded-full">
                <Star className="text-shinsei-red fill-shinsei-red w-4 h-4" />
                <span className="text-xs font-bold uppercase tracking-wider">Guía Michelin 2009</span>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
};

export default Home;