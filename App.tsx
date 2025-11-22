import React, { useEffect, useState } from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence } from 'framer-motion';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Menu from './pages/Menu';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';
import Reviews from './pages/Reviews';

const ScrollToTop = () => {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
};

const App: React.FC = () => {
  const [isLoading, setIsLoading] = useState(true);

  // Intro Loader Simulation
  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-shinsei-black text-shinsei-white">
        <div className="relative">
          <h1 className="text-4xl md:text-6xl font-serif tracking-[0.5em] animate-pulse">
            SHINSEI
          </h1>
          <div className="absolute -bottom-4 left-0 w-full h-0.5 bg-shinsei-graphite overflow-hidden">
            <div className="h-full bg-shinsei-red animate-[shimmer_1.5s_infinite_linear] w-1/2 mx-auto" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <Router>
      <ScrollToTop />
      <div className="relative min-h-screen bg-shinsei-black text-shinsei-white font-sans selection:bg-shinsei-red selection:text-white overflow-hidden">
        {/* Global Noise Overlay */}
        <div className="fixed inset-0 z-0 bg-noise opacity-20 pointer-events-none" />
        
        {/* Navigation */}
        <Navbar />

        {/* Main Content */}
        <main className="relative z-10">
          <AnimatePresence mode="wait">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/menu" element={<Menu />} />
              <Route path="/gallery" element={<Gallery />} />
              <Route path="/reviews" element={<Reviews />} />
              <Route path="/contact" element={<Contact />} />
            </Routes>
          </AnimatePresence>
        </main>

        <Footer />
      </div>
    </Router>
  );
};

export default App;