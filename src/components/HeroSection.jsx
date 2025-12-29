import React from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Apple, Play } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = () => {
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
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">La nueva era de la salud digital</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tight text-gray-900 mb-8 text-balance">
              Tu salud <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1CAEC1] via-[#0E2B43] to-[#F07C49] animate-gradient">
                nuestra prioridad
              </span>
            </h1>

            <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-lg leading-relaxed font-light">
              La plataforma inteligente que centraliza tu historial médico y potencia tu bienestar con tecnología de vanguardia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                onClick={() => handleDownload('iOS')}
                className="h-14 px-8 rounded-full bg-white hover:bg-gray-50 text-gray-900 text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg border-2 border-gray-200 hover:border-gray-300 flex items-center gap-3"
              >
                <Apple className="w-6 h-6" fill="currentColor" />
                <span>App Store</span>
              </Button>
              <Button
                onClick={() => handleDownload('Android')}
                variant="outline"
                className="h-14 px-8 rounded-full border-2 border-gray-200 hover:border-gray-300 text-gray-900 text-lg font-medium bg-white hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-3"
              >
                <Play className="w-6 h-6" fill="currentColor" />
                <span>Google Play</span>
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-gray-400 font-medium">
              <div className="flex -space-x-3">
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario mayor 1" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&q=80&w=150&h=150" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=150&h=150" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario mayor 2" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544120199-366916560ee1?auto=format&fit=crop&q=80&w=150&h=150" />
                </div>
                <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 4" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&q=80&w=150&h=150" />
                </div>
              </div>
              <p>Con la confianza de +10,000 usuarios</p>
            </div>
          </motion.div>

          <motion.div
            style={{ y: y1 }}
            className="relative hidden lg:block"
          >
            <div className="relative z-10 transform perspective-1000 rotate-y-12 rotate-x-6 hover:rotate-0 transition-transform duration-700 ease-out">
              <img
                src="/assets/hero-image.png"
                alt="App Interface Dashboard"
                className="w-full max-w-md mx-auto drop-shadow-2xl rounded-[2.5rem] border-8 border-gray-900/5 bg-gray-900"
              />

              {/* Floating Cards */}
              <motion.div
                style={{ y: y2 }}
                className="absolute top-20 -right-12 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 w-48 z-20"
              >
                <div className="flex items-center gap-3 mb-2">
                  <div className="w-8 h-8 rounded-full bg-red-100 flex items-center justify-center">
                    <div className="w-2 h-2 bg-red-500 rounded-full animate-ping" />
                  </div>
                  <span className="text-xs font-bold text-gray-400 uppercase">Alerta</span>
                </div>
                <p className="font-bold text-gray-900 text-sm">Cita cardiólogo</p>
                <p className="text-gray-400 text-xs">Mañana, 09:00 AM</p>
              </motion.div>

              <motion.div
                className="absolute bottom-32 -left-12 bg-white p-5 rounded-2xl shadow-xl border border-gray-100 z-20 flex items-center gap-4"
                initial={{ x: -20, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
              >
                <div className="w-12 h-12 rounded-full bg-[#1CAEC1]/10 flex items-center justify-center text-[#1CAEC1]">
                  <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Todo en orden</p>
                  <p className="text-gray-400 text-xs">Salud estable</p>
                </div>
              </motion.div>
            </div>

            {/* Background blobs for image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#1CAEC1]/30 via-[#F07C49]/20 to-[#0E2B43]/30 blur-3xl rounded-full transform scale-110 -z-10 animate-pulse-slow" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;