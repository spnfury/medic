import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ShieldCheck, Zap, Globe } from 'lucide-react';

const WhatIsSection = () => {
  const features = [
    {
      icon: Activity,
      title: "Salud 360°",
      description: "Visualiza métricas vitales, historial y proyecciones en un solo dashboard intuitivo."
    },
    {
      icon: ShieldCheck,
      title: "Seguridad Militar",
      description: "Encriptación de extremo a extremo que supera los estándares de la industria médica."
    },
    {
      icon: Zap,
      title: "Respuesta Inmediata",
      description: "Acceso instantáneo a tus datos críticos en situaciones de emergencia, en cualquier lugar."
    },
    {
      icon: Globe,
      title: "Cobertura Global",
      description: "Tu historial viaja contigo, traducible y accesible en cualquier parte del mundo."
    }
  ];

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
            <h2 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 leading-none">
              Tu salud <br />
              <span className="text-gray-400">nuestra prioridad.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light max-w-xl">
              Más que una app, somos tu compañero de confianza que te ayuda a cuidar tu salud con tecnología moderna, cercana y alineada con tu bienestar.
            </p>
          </motion.div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group p-8 rounded-3xl bg-gray-50 hover:bg-gray-900 hover:text-white transition-all duration-300 cursor-default"
            >
              <div className="w-14 h-14 rounded-2xl bg-white group-hover:bg-white/10 flex items-center justify-center mb-8 transition-colors shadow-sm">
                <feature.icon className="w-7 h-7 text-gray-900 group-hover:text-white transition-colors" />
              </div>
              <h3 className="text-2xl font-bold mb-4 tracking-wide">{feature.title}</h3>
              <p className="text-gray-500 group-hover:text-gray-300 leading-relaxed text-lg font-light">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhatIsSection;