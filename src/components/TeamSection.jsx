import React from 'react';
import { motion } from 'framer-motion';
import { Linkedin, Twitter } from 'lucide-react';

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Elena Torres",
      role: "Chief Medical Officer",
      image: "Portrait of Dr. Elena Torres, professional medical doctor",
      bio: "20+ años en cardiología preventiva. Ex-Directora en Hospital Central."
    },
    {
      name: "Carlos Méndez",
      role: "CTO & Co-Founder",
      image: "Portrait of Carlos Mendez, tech entrepreneur",
      bio: "Arquitecto de sistemas seguros. Anteriormente liderando ciberseguridad en Fintech."
    },
    {
      name: "Sarah Johnson",
      role: "Head of Product",
      image: "Portrait of Sarah Johnson, product manager",
      bio: "Especialista en UX de salud. Enfocada en accesibilidad y diseño humano."
    }
  ];

  return (
    <section id="equipo" className="py-32 bg-gray-50">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="text-center mb-20">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-[#00CED1] font-bold tracking-widest uppercase text-sm mb-4 block"
          >
            Mentes Brillantes
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-6xl font-bold text-gray-900"
          >
            Construido por expertos.
          </motion.h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                <img 
                  alt={member.name} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                 src="https://images.unsplash.com/photo-1595872018818-97555653a011" />
              </div>
              
              <h3 className="text-2xl font-bold text-gray-900 mb-1">{member.name}</h3>
              <p className="text-[#00CED1] font-medium mb-3 text-sm tracking-wide uppercase">{member.role}</p>
              <p className="text-gray-500 font-light mb-4 text-lg">{member.bio}</p>
              
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Linkedin size={20} /></a>
                <a href="#" className="text-gray-400 hover:text-gray-900 transition-colors"><Twitter size={20} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;