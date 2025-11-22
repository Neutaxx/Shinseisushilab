import React from 'react';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-shinsei-graphite pt-20 pb-10 border-t border-white/5 relative overflow-hidden">
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-shinsei-black via-shinsei-red to-shinsei-black opacity-50" />
      
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <h3 className="font-serif text-2xl font-bold tracking-widest mb-4">SHINSEI</h3>
          <p className="text-shinsei-silver text-sm leading-relaxed mb-6">
            Donde la tradición encuentra el futuro. Experimenta el arte del sushi molecular en un entorno diseñado para los sentidos.
          </p>
          <div className="flex space-x-4">
            <Instagram className="w-5 h-5 text-shinsei-silver hover:text-shinsei-red cursor-pointer transition-colors" />
            <Facebook className="w-5 h-5 text-shinsei-silver hover:text-shinsei-red cursor-pointer transition-colors" />
            <Twitter className="w-5 h-5 text-shinsei-silver hover:text-shinsei-red cursor-pointer transition-colors" />
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-shinsei-red mb-6">EXPLORAR</h4>
          <ul className="space-y-3 text-sm text-shinsei-silver">
            <li><Link to="/about" className="hover:text-white transition-colors">Nuestra Historia</Link></li>
            <li><Link to="/menu" className="hover:text-white transition-colors">El Menú</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Cenas Privadas</Link></li>
            <li><span className="hover:text-white transition-colors cursor-pointer">Prensa</span></li>
          </ul>
        </div>

        <div>
          <h4 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-shinsei-red mb-6">VISÍTANOS</h4>
          <div className="space-y-4 text-sm text-shinsei-silver">
            <div className="flex items-start gap-3">
              <MapPin className="w-4 h-4 mt-1 text-shinsei-red" />
              <p>128 Distrito Neón, <br/>Cyber City, TY 2099</p>
            </div>
            <div className="flex items-center gap-3">
              <Phone className="w-4 h-4 text-shinsei-red" />
              <p>+1 (555) 091-2345</p>
            </div>
            <div className="flex items-center gap-3">
              <Mail className="w-4 h-4 text-shinsei-red" />
              <p>reservas@shinsei.lab</p>
            </div>
          </div>
        </div>

        <div>
          <h4 className="font-sans text-xs font-bold tracking-[0.2em] uppercase text-shinsei-red mb-6">HORARIOS</h4>
          <ul className="space-y-2 text-sm text-shinsei-silver">
            <li className="flex justify-between">
              <span>Lun - Jue</span>
              <span>18:00 - 23:00</span>
            </li>
            <li className="flex justify-between text-white">
              <span>Vie - Sáb</span>
              <span>18:00 - 01:00</span>
            </li>
            <li className="flex justify-between">
              <span>Dom</span>
              <span>Cerrado</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs text-shinsei-silver/50">
        <p>© 2024 Shinsei Sushi Lab. Todos los derechos reservados.</p>
        <p className="mt-2 md:mt-0">Diseñado por AI</p>
      </div>
    </footer>
  );
};

export default Footer;