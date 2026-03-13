import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { ArrowRight, Check, Shield, Apple } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';

const HeroSection = ({ content }) => {
  const badge = content?.badge || 'Tu salud, nuestra prioridad';
  const titleLine1 = content?.titleLine1 || 'Te ayuda a';
  const titleLine2 = content?.titleLine2 || 'prevenir enfermedades';
  const description = content?.description || '';
  const trustText = content?.trustText || 'Con la confianza de +10,000 usuarios';
  const downloadToast = content?.downloadToast || { title: '🚧 Próximamente', description: 'La descarga para {platform} estará disponible muy pronto.' };
  const slidesData = content?.slides || [];

  const slides = slidesData.map((s) => ({
    id: s.id,
    img: s.img,
    rotate: s.id === 'body' ? -6 : 3,
    badge: {
      title: s.badgeTitle,
      sub: s.badgeSub,
      icon: Shield,
      position: s.id === 'body' ? 'bottom-left' : 'top-right'
    }
  }));

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    if (slides.length === 0) return;
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 3000);
    return () => clearInterval(timer);
  }, [slides.length]);

  const { toast } = useToast();
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const y2 = useTransform(scrollY, [0, 500], [0, -150]);

  const handleDownload = () => {
    const element = document.querySelector('#descargar');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const activeSlide = slides.length > 0 ? slides[currentSlide] : null;

  return (
    <section className="relative min-h-[90vh] md:min-h-[95vh] flex items-center pt-24 md:pt-32 overflow-hidden bg-[#F8FAFC]">
      {/* Abstract Background Elements */}
      <div className="absolute top-0 right-0 w-[400px] md:w-[800px] h-[400px] md:h-[800px] bg-gradient-to-bl from-[#E0F7FA] to-transparent rounded-full blur-3xl opacity-60 -translate-y-1/3 translate-x-1/3 pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-gradient-to-tr from-[#FFF3E0] via-[#F07C49]/5 to-transparent rounded-full blur-3xl opacity-50 translate-y-1/3 -translate-x-1/3 pointer-events-none" />

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 md:px-12 w-full relative z-10">
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 lg:gap-24 items-center">

          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 md:px-4 py-2 rounded-full bg-white border border-gray-200 shadow-sm mb-6 md:mb-8">
              <span className="w-2 h-2 rounded-full bg-[#1CAEC1] animate-pulse" />
              <span className="text-xs md:text-sm font-medium text-gray-600 tracking-wide uppercase">{badge}</span>
            </div>

            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-brand-blue mb-6 md:mb-8 text-balance">
              {titleLine1} <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1CAEC1] via-[#0E2B43] to-[#F07C49] animate-gradient">
                {titleLine2}
              </span>
            </h1>

            <p className="text-lg sm:text-xl md:text-2xl text-gray-500 mb-8 md:mb-10 max-w-lg mx-auto lg:mx-0 leading-relaxed font-light">
              {description}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
              <Button
                onClick={handleDownload}
                className="h-14 px-8 rounded-full bg-white hover:bg-gray-50 text-gray-900 text-lg font-medium transition-all hover:scale-105 active:scale-95 shadow-lg border-2 border-gray-200 hover:border-gray-300 flex items-center gap-3"
              >
                <Apple className="w-6 h-6" fill="currentColor" />
                <span>App Store</span>
              </Button>
              <Button
                onClick={handleDownload}
                variant="outline"
                className="h-14 px-8 rounded-full border-2 border-gray-200 hover:border-gray-300 text-gray-900 text-lg font-medium bg-white hover:bg-gray-50 transition-all hover:scale-105 active:scale-95 shadow-lg flex items-center gap-3"
              >
                <img src="/assets/google-play-logo.png" alt="Get it on Google Play" className="h-full w-auto object-contain" />
              </Button>
            </div>

            <div className="mt-8 md:mt-12 flex items-center gap-4 text-sm text-gray-400 font-medium justify-center lg:justify-start">
              <div className="flex -space-x-3">
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 1" className="w-full h-full object-cover" src="/assets/users/user1.png" />
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 2" className="w-full h-full object-cover" src="/assets/users/user2.png" />
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 3" className="w-full h-full object-cover" src="/assets/users/user3.png" />
                </div>
                <div className="w-8 h-8 md:w-10 md:h-10 rounded-full border-2 border-white bg-gray-100 overflow-hidden">
                  <img alt="Usuario 4" className="w-full h-full object-cover" src="/assets/users/user4.png" />
                </div>
              </div>
              <p className="text-xs md:text-sm">{trustText}</p>
            </div>
          </motion.div>

          {/* Right Column - Visual */}
          {activeSlide && (
            <div className="hidden lg:flex md:w-1/2 relative h-[600px] items-center justify-center pointer-events-none">
              {/* Background Blob */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-br from-[#1CAEC1]/20 to-[#F07C49]/20 rounded-full blur-3xl -z-10" />

              {/* Carousel Container - Clean Slide Track */}
              <div className="relative w-full h-full flex items-center justify-center">
                <AnimatePresence mode="popLayout" custom={currentSlide}>
                  <motion.div
                    key={activeSlide.id}
                    custom={currentSlide}
                    initial={{ x: 100, scale: 0.8, opacity: 0, zIndex: 10 }}
                    animate={{
                      x: 0,
                      scale: 1,
                      opacity: 1,
                      zIndex: 20,
                      filter: 'brightness(1)'
                    }}
                    exit={{
                      x: -100,
                      scale: 0.8,
                      opacity: 0,
                      zIndex: 0,
                      filter: 'brightness(0.5)'
                    }}
                    transition={{ duration: 0.5, ease: "easeInOut" }}
                    className="absolute w-[300px] aspect-[9/20] bg-slate-50 rounded-[3rem] border-[8px] border-slate-900 shadow-2xl overflow-hidden flex flex-col"
                  >
                    <div className="relative w-full h-full overflow-hidden bg-white">
                      <img
                        src={activeSlide.img}
                        alt={activeSlide.badge.title}
                        className="w-full h-full object-cover bg-white"
                      />
                    </div>
                  </motion.div>

                  {/* Floating Badge (Linked to Active) */}
                  <motion.div
                    key={`badge-${activeSlide.id}`}
                    initial={{ opacity: 0, y: 10, scale: 0.9 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: -10, scale: 0.9 }}
                    transition={{ duration: 0.3, delay: 0.2 }}
                    className={`absolute bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-4 z-40 ${activeSlide.badge.position === 'top-right' ? 'top-24 -right-4' :
                      activeSlide.badge.position === 'bottom-left' ? 'bottom-40 -left-6' :
                        'bottom-24 -right-2'
                      }`}
                  >
                    <div className={`p-2 rounded-full ${activeSlide.id === 'face' ? 'bg-orange-100' : 'bg-blue-100'}`}>
                      {activeSlide.id === 'face' ? (
                        <div className="w-2 h-2 bg-[#F07C49] rounded-full animate-ping" />
                      ) : (
                        (() => {
                          const Icon = activeSlide.badge.icon;
                          return <Icon className="text-brand-blue w-5 h-5" />;
                        })()
                      )}
                    </div>
                    <div>
                      <p className="font-bold text-brand-blue text-sm">{activeSlide.badge.title}</p>
                      <p className="text-xs text-gray-400">{activeSlide.badge.sub}</p>
                    </div>
                  </motion.div>
                </AnimatePresence>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default HeroSection;