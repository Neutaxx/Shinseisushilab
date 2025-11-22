import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu as MenuIcon, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  const navLinks = [
    { name: 'INICIO', path: '/' },
    { name: 'HISTORIA', path: '/about' },
    { name: 'MENÚ', path: '/menu' },
    { name: 'GALERÍA', path: '/gallery' },
    { name: 'RESEÑAS', path: '/reviews' },
    { name: 'CONTACTO', path: '/contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-40 transition-all duration-500 border-b border-transparent ${
        scrolled ? 'bg-shinsei-black/90 backdrop-blur-lg border-shinsei-graphite/50 py-4' : 'bg-transparent py-8'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <Link to="/" className="relative group z-50">
          <span className="font-serif text-2xl font-bold tracking-widest group-hover:text-shinsei-red transition-colors duration-300">
            SHINSEI
          </span>
          <span className="block text-[0.6rem] font-sans tracking-[0.3em] text-shinsei-silver">
            SUSHI LAB
          </span>
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-10 items-center">
          {navLinks.slice(0, -1).map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`text-xs tracking-[0.2em] uppercase hover:text-shinsei-red transition-colors duration-300 relative py-2 ${
                location.pathname === link.path ? 'text-shinsei-red' : 'text-shinsei-white'
              }`}
            >
              {link.name}
              {location.pathname === link.path && (
                <motion.div
                  layoutId="underline"
                  className="absolute bottom-0 left-0 w-full h-px bg-shinsei-red shadow-[0_0_10px_rgba(232,0,60,0.8)]"
                />
              )}
            </Link>
          ))}
          <Link
            to="/contact"
            className="px-6 py-2 border border-shinsei-white hover:border-shinsei-red hover:bg-shinsei-red hover:text-white transition-all duration-300 text-xs tracking-[0.2em] uppercase"
          >
            RESERVAR
          </Link>
        </div>

        {/* Mobile Toggle */}
        <button
          className="md:hidden z-50 text-shinsei-white hover:text-shinsei-red transition-colors"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="fixed inset-0 bg-shinsei-black z-40 flex flex-col items-center justify-center space-y-8 md:hidden"
          >
            {navLinks.map((link) => (
              <Link
                key={link.name}
                to={link.path}
                className="text-3xl font-serif tracking-widest hover:text-shinsei-red transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;