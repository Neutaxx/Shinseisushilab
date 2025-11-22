import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const About: React.FC = () => {
  const timelineEvents = [
    { year: "1985", title: "El Concepto", desc: "El Chef Kaito comienza a experimentar con estructuras moleculares de sushi tradicional Edomae en un pequeño sótano de Osaka." },
    { year: "1990", title: "Primera Ubicación", desc: "Shinsei abre sus puertas en Neo-Tokyo. Los críticos están confundidos, luego encantados." },
    { year: "1995", title: "Expansión Global", desc: "El 'Nigiri Invisible' se vuelve viral. Shinsei recibe su tercera Estrella Michelin." },
    { year: "1999", title: "El Laboratorio", desc: "Shinsei Sushi Lab establece su sede permanente en Cyber City." },
  ];

  return (
    <div className="pt-32 pb-20 w-full min-h-screen">
      <Section className="max-w-7xl mx-auto px-6 mb-24">
        <h1 className="font-serif text-6xl md:text-8xl mb-12 text-center md:text-left">
          El <span className="text-shinsei-red italic">Origen</span>
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          <div className="relative group">
            <motion.div 
              initial={{ scale: 1.1, opacity: 0 }}
              whileInView={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1 }}
              viewport={{ once: true }}
              className="h-[600px] w-full overflow-hidden relative bg-shinsei-graphite"
            >
              <div className="absolute inset-0 bg-shinsei-red/10 mix-blend-overlay z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <img 
                src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?q=80&w=1000&auto=format&fit=crop"  
                alt="Chef Kaito" 
                className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              />
            </motion.div>
            <div className="absolute -bottom-6 -right-6 bg-shinsei-graphite p-8 border-l-2 border-shinsei-red shadow-2xl">
              <p className="font-serif text-2xl">Chef Kaito Tanaka</p>
              <p className="text-xs text-shinsei-silver uppercase tracking-widest mt-2">Fundador & Científico Jefe</p>
            </div>
          </div>
          
          <div className="space-y-8 pt-12">
            <h2 className="text-sm tracking-[0.2em] uppercase text-shinsei-red mb-4 font-bold">Filosofía</h2>
            <p className="text-lg md:text-xl leading-relaxed text-shinsei-silver">
              En Shinsei, creemos que la tradición no es una cadena, sino una base para volar. Respetamos la rigurosa disciplina del Itamae, pero nos negamos a estar atados por el pasado.
            </p>
            <p className="text-lg md:text-xl leading-relaxed text-shinsei-silver">
              Nuestra cocina es un laboratorio. Nuestros ingredientes son variables. Nuestro objetivo es resolver la ecuación del sabor perfecto a través de la ciencia, el arte y un toque de locura.
            </p>
            <div className="grid grid-cols-2 gap-8 mt-12 border-t border-white/10 pt-8">
              <div>
                <h3 className="text-4xl font-serif text-shinsei-red mb-2">15+</h3>
                <p className="text-xs tracking-widest uppercase text-shinsei-silver">Platos por menú</p>
              </div>
              <div>
                <h3 className="text-4xl font-serif text-shinsei-red mb-2">3</h3>
                <p className="text-xs tracking-widest uppercase text-shinsei-silver">Estrellas Michelin</p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section className="bg-shinsei-graphite/20 py-24 relative overflow-hidden">
        {/* Neon Line Decoration */}
        <div className="absolute top-1/2 left-0 w-full h-px bg-gradient-to-r from-transparent via-shinsei-red/50 to-transparent -translate-y-1/2 hidden md:block" />
        
        <div className="max-w-7xl mx-auto px-6 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {timelineEvents.map((event, index) => (
              <motion.div
                key={event.year}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.5 }}
                viewport={{ once: true }}
                className="group relative bg-shinsei-black p-8 border border-white/5 hover:border-shinsei-red transition-all duration-300 hover:-translate-y-2 shadow-lg"
              >
                <div className="absolute -top-3 left-8 bg-shinsei-black px-2 text-shinsei-red font-mono font-bold text-lg border border-shinsei-red/20 group-hover:border-shinsei-red transition-colors">
                  {event.year}
                </div>
                <h3 className="font-serif text-xl mb-4 mt-4 group-hover:text-white transition-colors">{event.title}</h3>
                <p className="text-sm text-shinsei-silver leading-relaxed group-hover:text-white/80">{event.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
};

export default About;