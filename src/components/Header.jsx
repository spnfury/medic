import React, { useState, useEffect } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  const headerOpacity = useTransform(scrollY, [0, 50], [0, 1]);
  const headerY = useTransform(scrollY, [0, 50], [-20, 0]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: "Qué es", href: "#que-es" },
    { name: "Cómo funciona", href: "#como-funciona" },
    { name: "Equipo", href: "#equipo" },
  ];

  return (
    <>
      <motion.header 
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b border-transparent",
          isScrolled ? "bg-white/80 backdrop-blur-md border-gray-100 py-3" : "bg-transparent py-6"
        )}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        <div className="max-w-[1400px] mx-auto px-6 md:px-12 flex items-center justify-between">
          <div className="flex items-center gap-2 z-50">
            <a href="/" className="block relative">
               <img 
                src="https://horizons-cdn.hostinger.com/a203137b-d9ed-4bad-a713-4486f4b6f75d/212456ae9c3c78e309ad144af57301d2.png" 
                alt="SaludCheck365 logo" 
                className="h-8 md:h-10 w-auto object-contain"
              />
            </a>
          </div>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name}
                href={link.href} 
                className="text-gray-600 hover:text-gray-900 font-medium text-lg tracking-wide transition-colors relative group"
              >
                {link.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[2px] bg-[#00CED1] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <Button className="bg-gray-900 text-white hover:bg-black rounded-full px-6 text-lg h-11 tracking-wide font-medium">
              Descargar App
            </Button>
          </nav>

          {/* Mobile Menu Toggle */}
          <button 
            className="md:hidden z-50 p-2 text-gray-900"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </motion.header>

      {/* Mobile Menu Overlay */}
      <div 
        className={cn(
          "fixed inset-0 bg-white z-40 flex flex-col items-center justify-center transition-all duration-500 md:hidden",
          isMobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        )}
      >
        <nav className="flex flex-col items-center gap-8">
          {navLinks.map((link) => (
            <a 
              key={link.name}
              href={link.href} 
              className="text-3xl font-bold text-gray-900 hover:text-[#00CED1] transition-colors"
              onClick={() => setIsMobileMenuOpen(false)}
            >
              {link.name}
            </a>
          ))}
          <Button 
            className="bg-[#00CED1] text-white hover:bg-[#00b8bb] rounded-full px-8 py-6 text-xl mt-4"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Descargar App
          </Button>
        </nav>
      </div>
    </>
  );
};

export default Header;