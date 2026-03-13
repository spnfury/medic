import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Globe } from 'lucide-react';

const iconMap = { Activity, ShieldCheck, Zap, Globe };

const WhatIsSection = ({ content }) => {
  const title = content?.title || 'Tu salud';
  const titleHighlight = content?.titleHighlight || 'nuestra prioridad.';
  const description = content?.description || '';
  const features = content?.features || [];

  return (
    <section id="que-es" className="py-32 bg-white relative">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-24 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-brand-blue mb-6 leading-none text-balance">
              {title} <br />
              <span className="relative">
                <div className="absolute inset-0 bg-gradient-to-tr from-[#1CAEC1]/20 to-[#F07C49]/20 blur-3xl rounded-full transform scale-90 animate-pulse-slow" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1CAEC1] to-[#F07C49] relative z-10">{titleHighlight}</span>
              </span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-xl">
              {description}
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = iconMap[feature.icon] || Activity;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                className="group p-8 rounded-3xl bg-gray-50 hover:bg-brand-blue hover:text-white transition-all duration-300 cursor-default"
              >
                <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-white/10 flex items-center justify-center mb-8 transition-colors shadow-sm">
                  <Icon className="w-7 h-7 text-brand-blue group-hover:text-white transition-colors" />
                </div>
                <h3 className="text-2xl font-bold mb-4 tracking-wide">{feature.title}</h3>
                <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed text-lg font-light">
                  {feature.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;