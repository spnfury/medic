import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Twitter, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    product: [
      { name: 'Características', href: '#que-es' },
      { name: 'Cómo funciona', href: '#como-funciona' },
      { name: 'Seguridad', href: '#' },
      { name: 'Precios', href: '#' },
    ],
    company: [
      { name: 'Sobre nosotros', href: '#equipo' },
      { name: 'Blog', href: '#' },
      { name: 'Carreras', href: '#' },
      { name: 'Contacto', href: '#' },
    ],
    legal: [
      { name: 'Términos de Uso', href: '/terminos-de-uso' },
      { name: 'Política de Privacidad', href: '/politica-de-privacidad' },
      { name: 'Cookies', href: '#' },
      { name: 'RGPD', href: '#' },
    ],
  };

  const socialLinks = [
    { name: 'Twitter', icon: Twitter, href: '#', color: 'hover:text-blue-400' },
    { name: 'Instagram', icon: Instagram, href: '#', color: 'hover:text-pink-500' },
    { name: 'LinkedIn', icon: Linkedin, href: '#', color: 'hover:text-blue-600' },
  ];

  return (
    <footer className="bg-gradient-to-br from-[#0B0F17] via-[#0F1419] to-[#050505] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#00CED1]/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#4A90E2]/5 rounded-full blur-3xl" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12 border-b border-gray-800">
          <div className="grid md:grid-cols-12 gap-12 lg:gap-16">
            {/* Brand Column */}
            <motion.div
              className="md:col-span-12 lg:col-span-5"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <img
                src="/assets/footer-logo.png"
                alt="SaludCheck365 logo"
                className="h-10 w-auto mb-6 opacity-90"
              />
              <p className="text-gray-400 text-lg leading-relaxed max-w-md mb-8">
                Redefiniendo el estándar global para la gestión de salud personal. Tecnología, seguridad y diseño en perfecta sincronía.
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-gray-800 hover:border-gray-700 flex items-center justify-center transition-all ${social.color}`}
                      whileHover={{ scale: 1.1, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      aria-label={social.name}
                    >
                      <Icon className="w-5 h-5" />
                    </motion.a>
                  );
                })}
              </div>
            </motion.div>

            {/* Links Columns */}
            <div className="md:col-span-12 lg:col-span-7 grid grid-cols-2 md:grid-cols-3 gap-8 lg:gap-12">
              {/* Product */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.1 }}
              >
                <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Producto</h4>
                <ul className="space-y-4">
                  {footerLinks.product.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#00CED1] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Company */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Compañía</h4>
                <ul className="space-y-4">
                  {footerLinks.company.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#00CED1] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </motion.div>

              {/* Legal */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">Legal</h4>
                <ul className="space-y-4">
                  {footerLinks.legal.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-[#00CED1] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-[#00CED1] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                        >
                          {link.name}
                        </a>
                      )}
                    </li>
                  ))}
                </ul>
              </motion.div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="py-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-500 text-sm"
            >
              <span>© {currentYear} SaludCheck365.</span>
              <span className="hidden sm:inline">Todos los derechos reservados.</span>
              <span className="hidden md:inline flex items-center gap-1">
                Hecho con <Heart className="w-3 h-3 text-red-500 fill-current" /> en Barcelona
              </span>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center gap-3"
            >
              <div className="flex items-center gap-2 text-gray-500 text-sm">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                </span>
                <span>Todos los sistemas operativos</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;