import React from 'react';
import { motion } from 'framer-motion';
import Section from '../components/Section';
import { Star, Quote } from 'lucide-react';

const reviews = [
  {
    id: 1,
    name: "Miguel T.",
    role: "Crítico Gastronómico",
    text: "Shinsei nunca decepciona. La variedad en el menú es impresionante y todo lo que he probado ha sido delicioso. El personal es amable y atento, haciendo que cada visita sea agradable. ¡El rollo de atún picante es obligatorio!",
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 2,
    name: "Elena R.",
    role: "Invitado Verificado",
    text: "He estado en muchos restaurantes de sushi, pero Shinsei destaca por su calidad y creatividad. La experiencia Omakase fue inolvidable. Cada pieza de sushi fue una delicia y las explicaciones del chef añadieron un toque especial.",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 3,
    name: "Juana A.",
    role: "Guía Local",
    text: "El ambiente en Shinsei es fantástico. Es acogedor, moderno y el lugar perfecto para una cita o una cena informal con amigos. El dragón roll es mi favorito absoluto. El servicio es siempre de primera categoría.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop"
  },
  {
    id: 4,
    name: "Marcos S.",
    role: "Entusiasta del Sushi",
    text: "¡Shinsei tiene el mejor sushi de la ciudad! El pescado siempre es increíblemente fresco y la presentación es impresionante. Los chefs son verdaderos artistas. No me canso de su plato de sashimi. ¡Altamente recomendado!",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop"
  }
];

const Reviews: React.FC = () => {
  return (
    <div className="pt-32 pb-20 w-full min-h-screen">
      <Section className="max-w-7xl mx-auto px-6 text-center mb-16">
        <h2 className="text-shinsei-red text-sm font-bold tracking-[0.3em] uppercase mb-4">Testimonios</h2>
        <h1 className="font-serif text-5xl md:text-7xl">Nuestros Clientes <span className="italic text-shinsei-silver">Nos Aman</span></h1>
      </Section>

      <Section className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className="bg-shinsei-graphite/20 border border-white/5 p-8 relative group hover:border-shinsei-red/50 transition-colors duration-500"
            >
              <Quote className="absolute top-8 right-8 text-shinsei-red/20 w-12 h-12 group-hover:text-shinsei-red/40 transition-colors" />
              
              <p className="text-lg text-shinsei-silver mb-8 leading-relaxed relative z-10">
                "{review.text}"
              </p>
              
              <div className="flex items-center gap-4">
                <div className="relative w-12 h-12 overflow-hidden rounded-full border-2 border-shinsei-red/50">
                  <img src={review.image} alt={review.name} className="w-full h-full object-cover" />
                </div>
                <div>
                  <h4 className="font-serif text-lg text-white group-hover:text-shinsei-red transition-colors">{review.name}</h4>
                  <p className="text-xs uppercase tracking-widest text-shinsei-silver/50">{review.role}</p>
                </div>
              </div>

              <div className="mt-6 flex gap-1">
                {[...Array(5)].map((_, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.2 + (i * 0.1) }}
                  >
                    <Star className="w-4 h-4 text-shinsei-red fill-shinsei-red" />
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      <Section className="mt-24 text-center">
         <h3 className="font-serif text-3xl mb-8">Leer más reseñas</h3>
         {/* Link to external platform or form */}
      </Section>
    </div>
  );
};

export default Reviews;