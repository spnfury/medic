import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Heart, Instagram, Linkedin, Mail, MapPin, Phone } from 'lucide-react';

// Custom X (Twitter) Icon Component
const XIcon = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

const socialIconMap = {
  'X': XIcon,
  'Instagram': Instagram,
  'LinkedIn': Linkedin,
};

const socialColorMap = {
  'X': 'hover:text-gray-300',
  'Instagram': 'hover:text-pink-500',
  'LinkedIn': 'hover:text-blue-600',
};

const Footer = ({ content }) => {
  const currentYear = new Date().getFullYear();

  const description = content?.description || '';
  const productLinks = content?.productLinks || [];
  const companyLinks = content?.companyLinks || [];
  const legalLinks = content?.legalLinks || [];
  const socialLinks = content?.socialLinks || [];
  const copyright = content?.copyright || 'SaludCheck365.';
  const rightsText = content?.rightsText || 'Todos los derechos reservados.';
  const madeIn = content?.madeIn || 'Hecho con ❤️ en Barcelona';
  const statusText = content?.statusText || 'Todos los sistemas operativos';
  const productTitle = content?.productTitle || 'Producto';
  const companyTitle = content?.companyTitle || 'Compañía';
  const legalTitle = content?.legalTitle || 'Legal';

  return (
    <footer className="bg-gradient-to-br from-[#0E2B43] via-[#0A1F30] to-[#050505] text-white relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-[#1CAEC1]/10 rounded-full blur-3xl opacity-30" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#F07C49]/10 rounded-full blur-3xl opacity-30" />

      <div className="container-custom relative z-10">
        {/* Main Footer Content */}
        <div className="pt-20 pb-12 border-b border-brand-blue/20">
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
                {description}
              </p>

              {/* Social Links */}
              <div className="flex gap-4">
                {socialLinks.map((social) => {
                  const Icon = socialIconMap[social.name] || XIcon;
                  const color = socialColorMap[social.name] || 'hover:text-gray-300';
                  return (
                    <motion.a
                      key={social.name}
                      href={social.href}
                      className={`w-11 h-11 rounded-xl bg-white/5 hover:bg-white/10 border border-brand-blue/20 hover:border-brand-blue/30 flex items-center justify-center transition-all ${color}`}
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
                <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">{productTitle}</h4>
                <ul className="space-y-4">
                  {productLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#F07C49] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
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
                <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">{companyTitle}</h4>
                <ul className="space-y-4">
                  {companyLinks.map((link) => (
                    <li key={link.name}>
                      <a
                        href={link.href}
                        className="text-gray-400 hover:text-[#F07C49] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
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
                <h4 className="font-bold text-white mb-6 text-sm uppercase tracking-wider">{legalTitle}</h4>
                <ul className="space-y-4">
                  {legalLinks.map((link) => (
                    <li key={link.name}>
                      {link.href.startsWith('/') ? (
                        <Link
                          to={link.href}
                          className="text-gray-400 hover:text-[#F07C49] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
                        >
                          {link.name}
                        </Link>
                      ) : (
                        <a
                          href={link.href}
                          className="text-gray-400 hover:text-[#F07C49] transition-colors text-sm inline-block hover:translate-x-1 duration-200"
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
              <span>© {currentYear} {copyright}</span>
              <span className="hidden sm:inline">{rightsText}</span>
              <span className="hidden md:inline flex items-center gap-1">
                {madeIn}
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
                <span>{statusText}</span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;