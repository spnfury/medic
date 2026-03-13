import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, UserCheck, FilePlus, BellRing } from 'lucide-react';

const iconMap = { Smartphone, UserCheck, FilePlus, BellRing };

const HowItWorksSection = ({ content }) => {
  const title = content?.title || 'Bienestar, sin complicaciones.';
  const subtitle = content?.subtitle || '';
  const steps = content?.steps || [];

  return (
    <section id="como-funciona" className="py-32 bg-[#0E2B43] text-white relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            {title}
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-300 font-light max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => {
              const Icon = iconMap[step.icon] || Smartphone;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 40 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 }}
                  className="relative z-10 group"
                >
                  <div className="bg-[#081b2a] border border-white/5 p-8 rounded-3xl h-full hover:border-[#F07C49]/50 transition-all duration-500 group-hover:translate-y-[-8px] shadow-2xl">
                    <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 text-2xl font-bold shadow-lg shadow-black/20 group-hover:scale-110 transition-transform`}>
                      <Icon size={32} />
                    </div>
                    <div className="text-6xl font-bold text-white/20 mb-4 absolute top-6 right-8 select-none group-hover:text-[#F07C49] group-hover:opacity-100 transition-all duration-500">
                      0{index + 1}
                    </div>
                    <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                    <p className="text-gray-400 font-light text-lg leading-relaxed">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;