import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Section from '../components/Section';
import { X } from 'lucide-react';

interface MenuItem {
  id: number;
  category: string;
  name: string;
  desc: string;
  price: string;
  image: string;
  longDesc?: string;
  ingredients?: string[];
}

const menuItems: MenuItem[] = [
  // Maki
  {
    id: 1,
    category: 'maki',
    name: 'Tekka Maki',
    desc: 'Atún rojo, tallo de wasabi',
    price: '$12',
    image: 'https://images.unsplash.com/photo-1611143669185-af224c5e3252?q=80&w=800&auto=format&fit=crop',
    longDesc: 'La simplicidad perfeccionada. Nuestro Tekka Maki utiliza el corte más magro del atún rojo (Akami), envuelto en arroz de sushi perfectamente sazonado y nori crujiente. Un toque de wasabi fresco rallado realza el sabor natural del pescado.',
    ingredients: ['Atún Rojo (Akami)', 'Arroz Koshihikari', 'Nori Premium', 'Wasabi Fresco Rallado']
  },
  {
    id: 2,
    category: 'maki',
    name: 'Kappa Maki',
    desc: 'Pepino, sésamo, pasta de ciruela',
    price: '$8',
    image: '/images/Kappamaki.jpg',
    longDesc: 'Un clásico refrescante limpiador de paladar. Tiras de pepino japonés cortadas con precisión quirúrgica, semillas de sésamo tostadas y un toque sutil de pasta de ciruela (Umeboshi) para un contraste ácido.',
    ingredients: ['Pepino Kyuri', 'Sésamo Tostado', 'Pasta Umeboshi', 'Arroz de Sushi', 'Nori']
  },
  // Uramaki
  {
    id: 3,
    category: 'uramaki',
    name: 'Cyber Dragon',
    desc: 'Anguila, aguacate, caviar molecular',
    price: '$22',
    image: '/images/Cyberdragon.jpg',
    longDesc: 'Una evolución del Dragon Roll. Anguila de agua dulce asada al carbón, aguacate cremoso y cubierto con nuestras esferas de "caviar" de salsa de soja creadas mediante esferificación inversa.',
    ingredients: ['Anguila Unagi', 'Aguacate Hass', 'Caviar de Soja Molecular', 'Salsa Kabayaki', 'Arroz']
  },
  {
    id: 4,
    category: 'uramaki',
    name: 'Spicy Neutron',
    desc: 'Vieira, mayonesa picante, tempura',
    price: '$18',
    image: '/images/Spicyneutron.jpg',
    longDesc: 'Una explosión de texturas. Vieiras picadas a mano mezcladas con nuestra mayonesa picante secreta infundida con chiles togarashi, coronadas con copos de tempura crujientes para un acabado impactante.',
    ingredients: ['Vieiras Frescas', 'Mayonesa Picante Togarashi', 'Copos de Tempura', 'Cebollino', 'Sésamo Negro']
  },
  // Nigiri
  {
    id: 5,
    category: 'nigiri',
    name: 'Otoro Gold',
    desc: 'Atún graso, oro 24k, soja de trufa',
    price: '$28',
    image: 'https://images.unsplash.com/photo-1534482421-64566f976cfa?q=80&w=800&auto=format&fit=crop',
    longDesc: 'Lujo comestible. La parte más preciada del atún, el vientre graso, se deshace en la boca. Pincelado con soja envejecida con trufa negra y coronado con una lámina de oro comestible de 24 quilates.',
    ingredients: ['Otoro (Vientre de Atún)', 'Lámina de Oro 24k', 'Soja de Trufa Negra', 'Arroz Tibio']
  },
  {
    id: 6,
    category: 'nigiri',
    name: 'A5 Wagyu',
    desc: 'Ternera Miyazaki flambeada, ajo',
    price: '$35',
    image: 'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=800&auto=format&fit=crop',
    longDesc: 'Carne de vacuno japonesa A5 Miyazaki, ligeramente sopleteada para liberar sus grasas aromáticas. Servida con un chip de ajo crujiente y una pizca de sal ahumada.',
    ingredients: ['Wagyu A5 Miyazaki', 'Chip de Ajo', 'Sal Ahumada', 'Cebollino', 'Arroz']
  },
  // Sashimi
  {
    id: 7,
    category: 'sashimi',
    name: 'Hamachi Carpaccio',
    desc: 'Pez limón, hielo de jalapeño, ponzu',
    price: '$24',
    image: 'https://images.unsplash.com/photo-1534256958597-7fe685cbd745?q=80&w=800&auto=format&fit=crop',
    longDesc: 'Cortes finos de Hamachi servidos sobre un bloque de hielo iluminado. Acompañado de granizado de jalapeño y nuestra salsa ponzu cítrica de la casa.',
    ingredients: ['Hamachi (Pez Limón)', 'Jalapeño', 'Salsa Ponzu Yuzu', 'Micro Cilantro', 'Rábano Daikon']
  },
  // Omakase
  {
    id: 8,
    category: 'omakase',
    name: 'La Experiencia Lab',
    desc: 'Selección del Chef 15 Pasos',
    price: '$180',
    image: 'https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&w=800&auto=format&fit=crop',
    longDesc: 'Un viaje curado por nuestro Chef Ejecutivo. 15 cursos que abarcan desde aperitivos fríos hasta nigiris calientes, finalizando con postres moleculares. Una narrativa completa de sabores.',
    ingredients: ['Selección Estacional', 'Ingredientes del Mercado Toyosu', 'Técnicas Moleculares']
  },
  {
    id: 9,
    category: 'omakase',
    name: 'Degustación Futura',
    desc: '20 Pasos Experimentales',
    price: '$250',
    image: 'https://images.unsplash.com/photo-1579871494447-9811cf80d66c?q=80&w=800&auto=format&fit=crop',
    longDesc: 'Nuestra experiencia más vanguardista. 20 platos donde la ciencia desafía a la tradición. Incluye maridaje de sakes raros y cócteles experimentales.',
    ingredients: ['Ingredientes Exóticos', 'Nitrógeno Líquido', 'Esferificaciones', 'Maridaje de Sake']
  },
];

const categories = [
  { id: 'all', label: 'Todo' },
  { id: 'maki', label: 'Maki' },
  { id: 'uramaki', label: 'Uramaki' },
  { id: 'nigiri', label: 'Nigiri' },
  { id: 'sashimi', label: 'Sashimi' },
  { id: 'omakase', label: 'Omakase' },
];

const Menu: React.FC = () => {
  const [filter, setFilter] = useState('all');
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);

  const filteredItems = filter === 'all'
    ? menuItems
    : menuItems.filter(item => item.category === filter);

  return (
    <div className="pt-32 pb-20 w-full min-h-screen">
      <div className="max-w-7xl mx-auto px-6">
        <Section className="text-center mb-16">
          <h1 className="font-serif text-5xl md:text-7xl mb-6">Datos <span className="text-shinsei-red italic">Culinarios</span></h1>
          <p className="text-shinsei-silver text-sm tracking-widest uppercase">Explora nuestros experimentos comestibles</p>
        </Section>

        {/* Filter Navigation */}
        <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-16">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setFilter(cat.id)}
              className={`text-xs md:text-sm tracking-[0.2em] uppercase py-2 px-4 transition-all duration-300 relative ${filter === cat.id ? 'text-shinsei-red' : 'text-shinsei-silver hover:text-white'
                }`}
            >
              {cat.label}
              {filter === cat.id && (
                <motion.div
                  layoutId="activeCategory"
                  className="absolute bottom-0 left-0 w-full h-px bg-shinsei-red shadow-[0_0_8px_rgba(232,0,60,0.8)]"
                />
              )}
            </button>
          ))}
        </div>

        {/* Menu Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16"
        >
          <AnimatePresence mode="popLayout">
            {filteredItems.map((item) => (
              <motion.div
                key={item.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
                className="group"
              >
                <div className="relative overflow-hidden aspect-[4/3] mb-6 border border-white/5 group-hover:border-shinsei-red transition-all duration-500 group-hover:shadow-[0_0_30px_rgba(232,0,60,0.15)] bg-shinsei-graphite">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-shinsei-black/80 to-transparent opacity-60 group-hover:opacity-0 transition-opacity duration-500" />

                  {/* Hover Overlay Info - Functionalized Button */}
                  <div
                    className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-shinsei-black/40 backdrop-blur-[2px] cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <span className="border border-shinsei-white/50 px-4 py-2 text-xs uppercase tracking-widest text-white hover:bg-shinsei-red hover:border-shinsei-red transition-colors">
                      Detalles
                    </span>
                  </div>
                </div>

                <div className="flex justify-between items-end border-b border-white/10 pb-4 group-hover:border-shinsei-red/50 transition-colors duration-300">
                  <div>
                    <h3 className="font-serif text-2xl mb-2 group-hover:text-shinsei-red transition-colors duration-300">{item.name}</h3>
                    <p className="text-sm text-shinsei-silver">{item.desc}</p>
                  </div>
                  <span className="font-mono text-shinsei-red text-lg font-bold">{item.price}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Detail Modal */}
      <AnimatePresence>
        {selectedItem && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center px-4 bg-black/80 backdrop-blur-md"
            onClick={() => setSelectedItem(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 20, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-shinsei-graphite border border-shinsei-red/30 max-w-4xl w-full shadow-2xl relative grid grid-cols-1 md:grid-cols-2 overflow-hidden rounded-sm"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                className="absolute top-4 right-4 z-20 text-white/70 hover:text-shinsei-red transition-colors bg-black/40 p-2 rounded-full backdrop-blur-sm"
                onClick={() => setSelectedItem(null)}
              >
                <X size={20} />
              </button>

              {/* Image Section */}
              <div className="h-64 md:h-auto relative overflow-hidden">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.name}
                  className="w-full h-full object-cover transition-transform duration-1000 hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-shinsei-graphite via-transparent to-transparent md:bg-gradient-to-r opacity-80" />
              </div>

              {/* Content Section */}
              <div className="p-8 md:p-10 flex flex-col justify-center relative">
                {/* Background decorative number */}
                <span className="absolute top-4 right-8 text-[8rem] font-serif text-white/5 leading-none pointer-events-none select-none">
                  {selectedItem.id < 10 ? `0${selectedItem.id}` : selectedItem.id}
                </span>

                <h2 className="font-serif text-3xl md:text-4xl mb-2 text-white">{selectedItem.name}</h2>
                <p className="text-shinsei-red font-mono text-xl mb-6 font-bold">{selectedItem.price}</p>

                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-widest text-shinsei-silver mb-2 border-b border-white/10 pb-1 inline-block">Descripción</h3>
                  <p className="text-shinsei-silver leading-relaxed text-sm md:text-base">
                    {selectedItem.longDesc || selectedItem.desc}
                  </p>
                </div>

                <div className="mb-8">
                  <h3 className="text-xs uppercase tracking-widest text-shinsei-silver mb-3 border-b border-white/10 pb-1 inline-block">Ingredientes</h3>
                  <div className="flex flex-wrap gap-2">
                    {(selectedItem.ingredients || []).map((ing, index) => (
                      <span key={index} className="text-xs bg-white/5 px-3 py-1 text-shinsei-silver border border-white/10 rounded-full">
                        {ing}
                      </span>
                    ))}
                  </div>
                </div>

                <button
                  className="w-full bg-shinsei-red text-white py-3 text-xs uppercase tracking-[0.2em] hover:bg-white hover:text-shinsei-black transition-all duration-300 font-bold shadow-[0_0_15px_rgba(232,0,60,0.3)]"
                  onClick={() => setSelectedItem(null)}
                >
                  Cerrar Detalle
                </button>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Menu;