import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { CheckCircle2, ChevronLeft, ChevronRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const MedicalHistorySection = () => {
  const images = [
    "/assets/app_screens/screen1.jpg",
    "/assets/app_screens/screen2.jpg",
    "/assets/app_screens/screen3.jpg",
    "/assets/app_screens/screen4.jpg",
    "/assets/app_screens/screen5.jpg"
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="inteligencia-artificial" className="py-32 bg-white overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-2 lg:order-1"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#1CAEC1]/20 to-[#F07C49]/20 blur-3xl rounded-full transform scale-90 animate-pulse-slow" />

              <div className="relative z-10 w-full rounded-[3rem] shadow-2xl border-[12px] border-slate-900 bg-slate-50 overflow-hidden aspect-[9/19] max-w-sm mx-auto group p-4 pt-12 flex flex-col">
                {/* Dynamic Island */}
                <div className="absolute top-3 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-full z-20 flex items-center justify-center">
                  <div className="w-1 h-1 bg-blue-500/20 rounded-full ml-auto mr-3" />
                </div>

                <div className="relative w-full h-full rounded-[1.5rem] overflow-hidden bg-white">
                  <AnimatePresence mode="wait">
                    <motion.img
                      key={currentIndex}
                      src={images[currentIndex]}
                      alt={`App Interface Screen ${currentIndex + 1}`}
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      exit={{ opacity: 0 }}
                      transition={{ duration: 0.5 }}
                      className="w-full h-full object-contain bg-white"
                    />
                  </AnimatePresence>
                </div>

              </div>

              {/* Navigation Arrows - Moved outside the mockup for better visibility */}
              <button
                onClick={(e) => { e.stopPropagation(); prevSlide(); }}
                className="absolute -left-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-brand-blue p-3 rounded-full shadow-xl transition-all duration-300 z-30 hover:scale-110 active:scale-95"
                aria-label="Previous slide"
              >
                <ChevronLeft size={24} />
              </button>
              <button
                onClick={(e) => { e.stopPropagation(); nextSlide(); }}
                className="absolute -right-6 top-1/2 -translate-y-1/2 bg-white hover:bg-gray-100 text-brand-blue p-3 rounded-full shadow-xl transition-all duration-300 z-30 hover:scale-110 active:scale-95"
                aria-label="Next slide"
              >
                <ChevronRight size={24} />
              </button>

              {/* Floating Element */}
              <motion.div
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -bottom-10 -right-10 z-20 bg-white p-6 rounded-2xl shadow-xl border border-gray-100 max-w-xs hidden md:block"
              >
                <div className="flex gap-4 items-center mb-3">
                  <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <div>
                    <p className="font-bold text-brand-blue">Análisis Completado</p>
                    <p className="text-xs text-gray-400">Hace 2 minutos</p>
                  </div>
                </div>
                <div className="w-full bg-gray-100 h-2 rounded-full overflow-hidden">
                  <div className="bg-green-500 h-full w-[100%]" />
                </div>
              </motion.div>
            </div>
          </motion.div>


          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-5xl md:text-6xl font-bold text-brand-blue mb-8 leading-[1.1] text-balance">
              Inteligencia artificial <br />
              al servicio de tu <span className="text-[#1CAEC1]">historial.</span>
            </h2>
            <p className="text-xl text-gray-500 font-light mb-10 leading-relaxed">
              Olvídate de las carpetas físicas y los diagnósticos perdidos. Nuestra plataforma organiza, categoriza y analiza tu información médica automáticamente.
            </p>

            <div className="space-y-6 mb-10">
              {[
                "Historial cronológico unificado",
                "Recordatorios de exámenes periódicos",
                "Sube y almacena tus resultados",
                "Orientación profesional (Premium)"
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="w-6 h-6 rounded-full bg-[#1CAEC1]/20 flex items-center justify-center text-[#1CAEC1] flex-shrink-0">
                    <CheckCircle2 size={14} />
                  </div>
                  <span className="text-lg text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>


          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default MedicalHistorySection;