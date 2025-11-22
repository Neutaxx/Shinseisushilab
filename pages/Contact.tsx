import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';

const Contact: React.FC = () => {
  return (
    <div className="pt-32 pb-20 w-full min-h-screen flex flex-col justify-center">
      <Section className="max-w-6xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
        
        <div>
          <h1 className="font-serif text-5xl md:text-7xl mb-8">
            Iniciar <span className="text-shinsei-red block">Contacto</span>
          </h1>
          <p className="text-shinsei-silver text-lg mb-12">
            Las reservas se liberan el día 1 de cada mes. Para eventos privados en El Laboratorio, por favor consulte directamente.
          </p>
          
          <div className="space-y-6 font-mono text-sm mb-12">
            <div className="flex items-center gap-4 group">
              <span className="w-2 h-2 bg-shinsei-red rounded-full group-hover:shadow-[0_0_10px_#E8003C] transition-shadow" />
              <p>128 Distrito Neón, Cyber City, TY 2099</p>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="w-2 h-2 bg-shinsei-red rounded-full group-hover:shadow-[0_0_10px_#E8003C] transition-shadow" />
              <p>(917) 244-9324</p>
            </div>
            <div className="flex items-center gap-4 group">
              <span className="w-2 h-2 bg-shinsei-red rounded-full group-hover:shadow-[0_0_10px_#E8003C] transition-shadow" />
              <p>reservas@shinsei.lab</p>
            </div>
          </div>

           <div className="w-full h-64 bg-shinsei-graphite/50 rounded-sm overflow-hidden border border-white/10 relative grayscale hover:grayscale-0 transition-all duration-700">
                <iframe 
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3024.368802635705!2d-73.9972932234689!3d40.71331753774217!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25a2645555555%3A0x5555555555555555!2sNew%20York%2C%20NY%2010002!5e0!3m2!1sen!2sus!4v1614000000000!5m2!1sen!2sus" 
                    width="100%" 
                    height="100%" 
                    style={{ border: 0 }} 
                    loading="lazy"
                    title="Mapa"
                ></iframe>
                <div className="absolute inset-0 pointer-events-none border border-shinsei-red/20"></div>
           </div>
        </div>

        <div className="bg-shinsei-graphite/30 p-8 md:p-12 border border-white/5 backdrop-blur-sm relative overflow-hidden">
          {/* Decorative neon corner */}
          <div className="absolute top-0 right-0 w-16 h-16 border-t-2 border-r-2 border-shinsei-red opacity-50" />

          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-shinsei-silver">Identidad *</label>
              <input 
                type="text" 
                className="w-full bg-shinsei-black/50 border-b border-white/20 p-3 focus:outline-none focus:border-shinsei-red focus:shadow-[0_4px_20px_-10px_#E8003C] transition-all text-white placeholder-white/20"
                placeholder="Nombre Completo"
              />
            </div>
            
            <div className="grid grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-shinsei-silver">Coms *</label>
                <input 
                  type="email" 
                  className="w-full bg-shinsei-black/50 border-b border-white/20 p-3 focus:outline-none focus:border-shinsei-red focus:shadow-[0_4px_20px_-10px_#E8003C] transition-all text-white placeholder-white/20"
                  placeholder="Dirección de Correo"
                />
              </div>
              <div className="space-y-2">
                <label className="text-xs uppercase tracking-widest text-shinsei-silver">Teléfono *</label>
                <input 
                  type="tel" 
                  className="w-full bg-shinsei-black/50 border-b border-white/20 p-3 focus:outline-none focus:border-shinsei-red focus:shadow-[0_4px_20px_-10px_#E8003C] transition-all text-white placeholder-white/20"
                  placeholder="(123)-456-7890"
                />
              </div>
            </div>

             <div className="grid grid-cols-2 gap-6">
                <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-shinsei-silver">Fecha</label>
                    <input 
                    type="date" 
                    className="w-full bg-shinsei-black/50 border-b border-white/20 p-3 focus:outline-none focus:border-shinsei-red transition-colors text-white/50"
                    />
                </div>
                 <div className="space-y-2">
                    <label className="text-xs uppercase tracking-widest text-shinsei-silver">Huéspedes</label>
                    <input 
                    type="number" 
                    min="1"
                    className="w-full bg-shinsei-black/50 border-b border-white/20 p-3 focus:outline-none focus:border-shinsei-red transition-colors text-white/50"
                    placeholder="2"
                    />
                </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs uppercase tracking-widest text-shinsei-silver">Consulta *</label>
              <textarea 
                rows={4}
                className="w-full bg-shinsei-black/50 border-b border-white/20 p-3 focus:outline-none focus:border-shinsei-red focus:shadow-[0_4px_20px_-10px_#E8003C] transition-all text-white placeholder-white/20 resize-none"
                placeholder="Restricciones dietéticas, solicitudes especiales..."
              />
            </div>

            <motion.button 
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="w-full bg-shinsei-red text-white font-bold uppercase tracking-[0.2em] py-4 hover:bg-white hover:text-shinsei-black transition-colors duration-300 shadow-[0_0_20px_rgba(232,0,60,0.4)]"
            >
              ENVIAR
            </motion.button>
          </form>
        </div>

      </Section>
    </div>
  );
};

export default Contact;