import React from 'react';
import { motion } from 'framer-motion';
import { Apple, Play, Download } from 'lucide-react';
import { Button } from '@/components/ui/button';

const DownloadSection = () => {
    const handleDownloadLink = (url) => {
        // In a real app, this would be the actual store URL
        window.open(url, '_blank');
    };

    return (
        <section id="descargar" className="py-24 bg-white relative overflow-hidden">
            <div className="max-w-[1400px] mx-auto px-6 md:px-12">
                <div className="bg-[#0E2B43] rounded-[3rem] p-12 md:p-20 relative overflow-hidden shadow-2xl">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#1CAEC1]/10 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2" />
                    <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-[#F07C49]/10 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4" />

                    <div className="relative z-10 grid lg:grid-cols-2 gap-12 items-center">
                        <motion.div
                            initial={{ opacity: 0, x: -30 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                        >
                            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 border border-white/10 text-[#1CAEC1] text-sm font-bold uppercase tracking-widest mb-8">
                                <Download size={16} />
                                <span>Disponible ahora</span>
                            </div>
                            <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
                                Lleva tu salud <br />
                                en el <span className="text-[#F07C49]">bolsillo.</span>
                            </h2>
                            <p className="text-xl text-gray-400 font-light mb-10 max-w-lg leading-relaxed">
                                Únete a más de 10,000 personas que ya gestionan su bienestar con SaludCheck365. Descarga la app y toma el control total hoy mismo.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-6">
                                <button
                                    onClick={() => handleDownloadLink('https://apps.apple.com')}
                                    className="hover:scale-105 active:scale-95 transition-transform focus:outline-none"
                                >
                                    <img src="/assets/app-store-badge.svg" alt="Descarga en el App Store" className="h-[46px] w-auto object-contain" />
                                </button>
                                <button
                                    onClick={() => handleDownloadLink('https://play.google.com')}
                                    className="hover:scale-105 active:scale-95 transition-transform focus:outline-none sm:-ml-2"
                                >
                                    <img src="/assets/google-play-badge.png" alt="Disponible en Google Play" className="h-[66px] w-auto object-contain" />
                                </button>
                            </div>
                        </motion.div>

                        <motion.div
                            initial={{ opacity: 0, scale: 0.8 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            className="relative lg:block"
                        >
                            <div className="relative z-10">
                                <img
                                    src="/assets/hero-image.png"
                                    alt="App Interface"
                                    className="w-full max-w-[320px] mx-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.5)] rounded-[2.5rem] border-4 border-white/10"
                                />
                            </div>
                            {/* Decorative rings */}
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] border border-white/5 rounded-full" />
                            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[150%] h-[150%] border border-white/5 rounded-full" />
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DownloadSection;
