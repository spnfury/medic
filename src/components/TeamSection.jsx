import React from 'react';
import { motion } from 'framer-motion';

const TeamSection = () => {
  const team = [
    {
      name: "Dr. Alex Hugué",
      role: "Founder & Chief Medical Officer",
      image: "/assets/team/alex-hugue.png", // Real image
      bio: "Médico especialista con visión innovadora en medicina preventiva."
    },
    {
      name: "Edgar",
      role: "Ingeniero de Software",
      image: "/assets/team/edgar-bosch.jpg",
      bio: "Historia de la startup: doctor Alex Hugué + ingeniero Edgar Boch, innovación + bienestar, app basada en algoritmos avanzados y conocimientos médicos."
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
            className="text-5xl md:text-6xl font-bold text-brand-blue"
          >
            Construido por expertos.
          </motion.h2>
        </div>

        <div className="flex justify-center max-w-4xl mx-auto gap-12">
          {team.map((member, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="group relative max-w-sm w-full"
            >
              <div className="aspect-[3/4] overflow-hidden rounded-2xl mb-6 bg-gray-200">
                <img
                  alt={member.name}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 saturate-0 group-hover:saturate-100"
                  src={member.image} />
              </div>

              <h3 className="text-2xl font-bold text-brand-blue mb-1">{member.name}</h3>
              <p className="text-[#00CED1] font-medium mb-3 text-sm tracking-wide uppercase">{member.role}</p>
              <p className="text-gray-500 font-light mb-4 text-lg">{member.bio}</p>


            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TeamSection;