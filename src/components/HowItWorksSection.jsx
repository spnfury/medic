import React from 'react';
import { motion } from 'framer-motion';
import { Smartphone, UserCheck, FilePlus, BellRing } from 'lucide-react';

const HowItWorksSection = () => {
  const steps = [
    {
      icon: Smartphone,
      title: "Instalación",
      desc: "Descarga desde App Store o Google Play en segundos.",
      color: "bg-blue-100 text-blue-600"
    },
    {
      icon: UserCheck,
      title: "Verificación",
      desc: "Crea tu ID seguro con validación biométrica.",
      color: "bg-teal-100 text-teal-600"
    },
    {
      icon: FilePlus,
      title: "Digitalización",
      desc: "Escanea o sube tus documentos médicos fácilmente.",
      color: "bg-orange-100 text-orange-600"
    },
    {
      icon: BellRing,
      title: "Gestión",
      desc: "Recibe alertas inteligentes y recordatorios personalizados.",
      color: "bg-indigo-100 text-indigo-600"
    }
  ];

  return (
    <section id="como-funciona" className="py-32 bg-[#0B0F17] text-white relative overflow-hidden">
      {/* Background Gradients */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[128px]" />
      <div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-teal-500/10 rounded-full blur-[128px]" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 relative z-10">
        <div className="text-center mb-24">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-7xl font-bold mb-6 tracking-tight"
          >
            Simplicidad radical.
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-xl text-gray-400 font-light max-w-2xl mx-auto"
          >
            Hemos eliminado la complejidad de la gestión médica. Cuatro pasos para tomar el control total.
          </motion.p>
        </div>

        <div className="relative">
          {/* Connector Line */}
          <div className="hidden lg:block absolute top-1/2 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-gray-700 to-transparent -translate-y-1/2 z-0" />

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative z-10 group"
              >
                <div className="bg-[#151B2B] border border-gray-800 p-8 rounded-3xl h-full hover:border-gray-600 transition-colors duration-300">
                  <div className={`w-16 h-16 rounded-2xl ${step.color} flex items-center justify-center mb-6 text-2xl font-bold`}>
                    <step.icon size={32} />
                  </div>
                  <div className="text-6xl font-bold text-gray-800 mb-4 absolute top-4 right-6 select-none opacity-20 group-hover:opacity-40 transition-opacity">
                    0{index + 1}
                  </div>
                  <h3 className="text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-400 font-light text-lg leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;