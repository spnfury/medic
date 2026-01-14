import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Shield } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev === 0 ? 1 : 0));
    }, 3000); // Switch every 3 seconds
    return () => clearInterval(timer);
  }, []);
  const { toast } = useToast();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const handleDownload = (platform) => {
    toast({
      title: "🚧 Próximamente",
      description: `La descarga para ${platform} estará disponible muy pronto.`,
    });
  };

  return (
    <section className="relative min-h-[95vh] flex items-center pt-32 overflow-hidden bg-[#F8FAFC]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gradient-to-bl from-[#E0F7FA] to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFF3E0] via-[#F07C49]/5 to-transparent rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#1CAEC1] animate-pulse" />
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">Tu salud, nuestra prioridad</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tight text-brand-blue mb-8 text-balance">
              Te ayuda a <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1CAEC1] via-[#0E2B43] to-[#F07C49] animate-gradient">
                prevenir enfermedades
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-lg leading-relaxed font-light">
              SaludCheck365 es una app que te cuida y te ayuda a prevenir enfermedades gracias a recomendaciones personalizadas basadas en algoritmos avanzados y conocimientos médicos avalados por un equipo de expertos.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDownload('iOS')}
                className="h-14 transition-all"
              >
                <img src="/assets/app-store-logo.png" alt="Download on App Store" className="h-full w-auto object-contain" />
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => handleDownload('Android')}
                className="h-14 transition-all"
              >
                <img src="/assets/google-play-logo.png" alt="Get it on Google Play" className="h-full w-auto object-contain" />
              </motion.button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-gray-400 font-medium">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 1" className="w-full h-full object-cover" src="/assets/users/user1.png" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 2" className="w-full h-full object-cover" src="/assets/users/user2.png" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 3" className="w-full h-full object-cover" src="/assets/users/user3.png" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 4" className="w-full h-full object-cover" src="/assets/users/user4.png" />
                </div>
              </div>
              <p>Con la confianza de +10,000 usuarios</p>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          <div className="md:w-1/2 relative h-[600px] flex items-center justify-center pointer-events-none">
            {/* Background Blob */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1CAEC1]/20 to-[#F07C49]/20 rounded-full blur-3xl -z-10" />

            {/* Carousel Container */}
            <div className="relative w-full h-full flex items-center justify-center">
              <AnimatePresence mode="wait">
                {currentSlide === 0 ? (
                  <motion.div
                    key="prevention"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Phone 1 (Back/Left - Body Map Full) */}
                    <motion.div
                      className="absolute left-4 top-10 w-[260px] h-[540px] bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform -rotate-6 z-10"
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.1 }}
                    >
                      <img src="/assets/body-map-full.jpg" alt="Mapa corporal completo" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Phone 2 (Front/Right - Face Map) */}
                    <motion.div
                      className="absolute right-4 bottom-10 w-[260px] h-[540px] bg-black rounded-[2.5rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-3 z-20"
                      initial={{ x: 20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.3 }}
                    >
                      <img src="/assets/body-map-face.jpg" alt="Mapa facial" className="w-full h-full object-cover" />
                    </motion.div>

                    {/* Floating Badge (Prevention) */}
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.6 }}
                      className="absolute top-24 -right-2 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 w-48 z-30"
                    >
                      <div className="flex items-center gap-3 mb-2">
                        <div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center">
                          <div className="w-2 h-2 bg-[#F07C49] rounded-full animate-ping" />
                        </div>
                        <span className="text-xs font-bold text-gray-400 uppercase">Alerta</span>
                      </div>
                      <div className="space-y-1">
                        <p className="font-bold text-brand-blue text-sm">Cita dermatólogo</p>
                        <p className="text-xs text-gray-400">Revisión anual recomendada</p>
                      </div>
                    </motion.div>
                  </motion.div>
                ) : (
                  <motion.div
                    key="management"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.8 }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    {/* Single Phone Dashboard */}
                    <div className="relative w-[300px] h-[620px] bg-black rounded-[3rem] border-8 border-gray-900 shadow-2xl overflow-hidden transform rotate-0 z-20">
                      <img src="/assets/hero-image.png" alt="Dashboard Principal" className="w-full h-full object-cover" />
                    </div>

                    {/* Floating Badge (Status OK) */}
                    <motion.div
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.4 }}
                      className="absolute bottom-40 -left-6 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-30"
                    >
                      <div className="bg-green-100 p-2 rounded-full">
                        <Check className="text-green-600 w-5 h-5" />
                      </div>
                      <div>
                        <p className="font-bold text-brand-blue text-sm">Todo en orden</p>
                        <p className="text-xs text-gray-400">Sin alertas pendientes</p>
                      </div>
                    </motion.div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;