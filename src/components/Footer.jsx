import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#050505] text-white pt-24 pb-12 border-t border-gray-900">
      <div className="max-w-[1400px] mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-12 mb-20">
          <div className="md:col-span-5">
            <img
              src="/assets/footer-logo.png"
              alt="SaludCheck365 logo"
              className="h-8 w-auto mb-8 opacity-90"
            />
            <p className="text-gray-500 text-lg font-light leading-relaxed max-w-sm mb-8">
              Redefiniendo el estándar global para la gestión de salud personal. Tecnología, seguridad y diseño en perfecta sincronía.
            </p>
            <div className="flex gap-4">
              {/* Social placeholders */}
              {['Twitter', 'Instagram', 'LinkedIn'].map(social => (
                <a key={social} href="#" className="text-gray-600 hover:text-white transition-colors text-sm font-medium">{social}</a>
              ))}
            </div>
          </div>

          <div className="md:col-span-2 md:col-start-7">
            <h4 className="font-bold mb-6 text-gray-200">Producto</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Características</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Seguridad</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Para Doctores</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Precios</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-gray-200">Compañía</h4>
            <ul className="space-y-4">
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Nosotros</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Carreras</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Blog</a></li>
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Contacto</a></li>
            </ul>
          </div>

          <div className="md:col-span-2">
            <h4 className="font-bold mb-6 text-gray-200">Legal</h4>
            <ul className="space-y-4">
              <li><Link to="/terminos-de-uso" className="text-gray-500 hover:text-[#00CED1] transition-colors">Términos</Link></li>
              <li><Link to="/politica-de-privacidad" className="text-gray-500 hover:text-[#00CED1] transition-colors">Privacidad</Link></li>
              <li><a href="#" className="text-gray-500 hover:text-[#00CED1] transition-colors">Cookies</a></li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-gray-900 gap-6">
          <p className="text-gray-600 text-sm">
            © 2026 SaludCheck365 Inc. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-2 text-gray-500 text-sm">
            <span className="w-2 h-2 rounded-full bg-green-500"></span>
            <span>Todos los sistemas operativos</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;