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
      <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-gradient-to-tr from-[#FFF3E0] to-transparent rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-8">
              <span className="w-2 h-2 rounded-full bg-[#00CED1] animate-pulse" />
              <span className="text-sm font-medium text-gray-600 tracking-wide uppercase">La nueva era de la salud digital</span>
            </div>

            <h1 className="text-6xl md:text-7xl lg:text-[5.5rem] font-bold leading-[0.9] tracking-tight text-gray-900 mb-8">
              Tu salud, <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#00CED1] via-[#4A90E2] to-[#FF8C42]">
                elevada.
              </span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-500 mb-10 max-w-lg leading-relaxed font-light">
              La plataforma inteligente que centraliza tu historial médico y potencia tu bienestar con tecnología de vanguardia.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button 
                onClick={() => handleDownload('iOS')}
                className="h-14 px-8 rounded-full bg-gray-900 hover:bg-black text-white text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg shadow-gray-200"
              >
                <Apple className="mr-2 w-5 h-5" />
                App Store
              </Button>
              <Button 
                onClick={() => handleDownload('Android')}
                variant="outline"
                className="h-14 px-8 rounded-full border-2 border-gray-200 hover:border-gray-900 text-gray-900 text-lg font-medium bg-transparent hover:bg-transparent transition-all"
              >
                Google Play
              </Button>
            </div>

            <div className="mt-12 flex items-center gap-4 text-sm text-gray-400 font-medium">
              <div className="flex -space-x-3">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="w-10 h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                    <img alt={`User ${i}`} className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1694157263770-1a844cb0f6e0" />
                  </div>
                ))}
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
                src="https://horizons-cdn.hostinger.com/a203137b-d9ed-4bad-a713-4486f4b6f75d/8a1ebf614dfd480e9b33ffbf981e2a39.png" 
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
                <div className="w-12 h-12 rounded-full bg-[#00CED1]/10 flex items-center justify-center text-[#00CED1]">
                  <ArrowRight className="w-6 h-6 rotate-[-45deg]" />
                </div>
                <div>
                  <p className="font-bold text-gray-900 text-lg">Todo en orden</p>
                  <p className="text-gray-400 text-xs">Salud estable</p>
                </div>
              </motion.div>
            </div>

            {/* Background blobs for image */}
            <div className="absolute inset-0 bg-gradient-to-tr from-[#00CED1]/20 to-[#4A90E2]/20 blur-3xl rounded-full transform scale-110 -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;