import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const images = [
  "/images/Cybersalmon.jpg",
  "/images/Cyberdragon.jpg",
  "/images/Kappamaki.jpg",
  "/images/Spicyneutron.jpg",
  "https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop",
  "https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop",
];

const Gallery: React.FC = () => {
  const { scrollYProgress } = useScroll();
  const y1 = useTransform(scrollYProgress, [0, 1], [0, -100]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const y3 = useTransform(scrollYProgress, [0, 1], [0, -50]);

  return (
    <div className="pt-32 pb-20 w-full min-h-screen overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <h1 className="font-serif text-5xl md:text-8xl text-shinsei-white mb-4">Evidencia <span className="text-shinsei-red">Visual</span></h1>
        <p className="text-shinsei-silver max-w-xl">
          Vislumbres al interior del laboratorio donde el arte encuentra la gastronomía.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Column 1 */}
        <motion.div style={{ y: y1 }} className="flex flex-col gap-8">
          {[images[0], images[1], images[2]].map((src, i) => (
            <div key={i} className="group relative overflow-hidden border border-white/5 hover:border-shinsei-red transition-all duration-500 bg-shinsei-graphite">
              <img src={src} alt="Gallery" className="w-full object-cover h-[400px] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-shinsei-red/10 opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="absolute bottom-4 left-4 translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500">
                <p className="text-xs font-bold uppercase tracking-widest text-white">Noche Omakase</p>
              </div>
            </div>
          ))}
        </motion.div>

        {/* Column 2 */}
        <motion.div style={{ y: y2 }} className="flex flex-col gap-8 md:mt-24">
          {[images[3], images[4], images[5]].map((src, i) => (
            <div key={i} className="group relative overflow-hidden border border-white/5 hover:border-shinsei-red transition-all duration-500 bg-shinsei-graphite">
              <img src={src} alt="Gallery" className="w-full object-cover h-[500px] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
              <div className="absolute bottom-4 left-4 font-mono text-xs text-shinsei-red opacity-0 group-hover:opacity-100 transition-opacity">
                #SHINSEILAB_00{i + 4}
              </div>
            </div>
          ))}
        </motion.div>

        {/* Column 3 */}
        <motion.div style={{ y: y3 }} className="flex flex-col gap-8 md:mt-12">
          {[images[6], images[7], images[0]].map((src, i) => (
            <div key={i} className="group relative overflow-hidden border border-white/5 hover:border-shinsei-red transition-all duration-500 bg-shinsei-graphite">
              <img src={src} alt="Gallery" className="w-full object-cover h-[350px] grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

export default Gallery;