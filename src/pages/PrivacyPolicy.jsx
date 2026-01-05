import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, Shield, Lock, Eye, FileText, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const PrivacyPolicy = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'introduccion', title: '1. Introducción', icon: FileText },
    { id: 'responsable', title: '2. Responsable del Tratamiento', icon: Shield },
    { id: 'datos-recopilados', title: '3. Datos que Recopilamos', icon: Eye },
    { id: 'uso-datos', title: '4. Cómo Usamos Tus Datos', icon: Lock },
    { id: 'compartir', title: '5. Con Quién Compartimos Tus Datos', icon: FileText },
    { id: 'conservacion', title: '6. Plazo de Conservación', icon: Clock },
    { id: 'seguridad', title: '7. Seguridad de la Información', icon: Shield },
    { id: 'derechos', title: '8. Tus Derechos', icon: FileText },
    { id: 'menores', title: '9. Política sobre Menores', icon: Shield },
    { id: 'cookies', title: '10. Cookies y Tecnologías Similares', icon: Eye },
    { id: 'transferencias', title: '11. Transferencias Internacionales', icon: FileText },
    { id: 'cambios', title: '12. Cambios en esta Política', icon: Clock },
    { id: 'contacto', title: '13. Contacto', icon: Mail },
  ];

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section.id);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section.id);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-blue-50">
      <Helmet>
        <title>Política de Privacidad - SaludCheck365</title>
        <meta name="description" content="Política de privacidad de SaludCheck365. Conoce cómo protegemos tus datos personales y de salud." />
      </Helmet>

      {/* Header */}
      <nav className="bg-white/80 backdrop-blur-xl border-b border-gray-200 sticky top-0 z-50 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <Link to="/" className="inline-flex items-center gap-2 text-gray-600 hover:text-[#00CED1] transition-colors group">
            <ArrowLeft className="w-5 h-5 transition-transform group-hover:-translate-x-1" />
            <span className="font-medium">Volver al inicio</span>
          </Link>
        </div>
      </nav>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
        <div className="grid lg:grid-cols-12 gap-12">

          {/* Sidebar Navigation - Desktop */}
          <aside className="hidden lg:block lg:col-span-3">
            <div className="sticky top-24">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-100 p-6">
                <h3 className="text-sm font-bold text-brand-blue uppercase tracking-wider mb-4">Contenido</h3>
                <nav className="space-y-1">
                  {sections.map((section) => {
                    const Icon = section.icon;
                    return (
                      <a
                        key={section.id}
                        href={`#${section.id}`}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-all ${activeSection === section.id
                          ? 'bg-gradient-to-r from-[#00CED1] to-[#4A90E2] text-white shadow-md'
                          : 'text-gray-600 hover:bg-gray-50 hover:text-brand-blue'
                          }`}
                      >
                        <Icon className="w-4 h-4 flex-shrink-0" />
                        <span className="line-clamp-1">{section.title}</span>
                      </a>
                    );
                  })}
                </nav>
              </div>
            </div>
          </aside>

          {/* Main Content */}
          <motion.div
            className="lg:col-span-9"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            {/* Hero Section */}
            <div className="mb-16">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#00CED1]/10 to-[#4A90E2]/10 border border-[#00CED1]/20 mb-6">
                <Shield className="w-4 h-4 text-[#00CED1]" />
                <span className="text-sm font-semibold text-gray-700">Actualizado: Diciembre 2025</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-brand-blue mb-6 leading-tight">
                Política de <span className="gradient-text">Privacidad</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                En Saludcheck365 valoramos tu confianza y nos tomamos muy en serio la protección de tu información personal.
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 legal-content">

              <section id="introduccion" className="scroll-mt-24">
                <h2>1. Introducción</h2>
                <p>
                  En Saludcheck365 valoramos tu confianza y nos tomamos muy en serio la protección de tu información personal. Esta Política de Privacidad explica de forma clara qué datos recopilamos, con qué finalidad los utilizamos, cómo los protegemos, con quién los compartimos y cuáles son tus derechos en relación con su tratamiento.
                </p>
                <p>
                  El uso de nuestra aplicación implica la aceptación de los términos aquí descritos. Si tienes dudas o necesitas aclaraciones, puedes contactarnos en <a href="mailto:saludcheck365@gmail.com">saludcheck365@gmail.com</a>.
                </p>
              </section>

              <section id="responsable" className="scroll-mt-24">
                <h2>2. Responsable del Tratamiento</h2>
                <p>
                  El responsable del tratamiento de tus datos personales es <strong>Saludcheck365</strong>, con domicilio en Barcelona, España.
                </p>
                <p>
                  Puedes contactar con nuestro Delegado de Protección de Datos (DPO) a través de: <a href="mailto:saludcheck365@gmail.com">saludcheck365@gmail.com</a> o enviando una carta a la dirección anterior con el asunto "Atención: Delegado de Protección de Datos".
                </p>
                <p>
                  Saludcheck365 cumple con el Reglamento General de Protección de Datos (RGPD) y demás normativas europeas y nacionales en materia de privacidad.
                </p>
              </section>

              <section id="datos-recopilados" className="scroll-mt-24">
                <h2>3. Datos que Recopilamos</h2>
                <p>
                  Los tipos de información recopilada pueden variar según las funciones que utilices en la aplicación. En general, podemos procesar las siguientes categorías:
                </p>
                <ul>
                  <li><strong>Datos de registro y perfil:</strong> nombre, apellidos, correo electrónico, fecha de nacimiento, sexo, altura, peso, foto de perfil y credenciales de acceso.</li>
                  <li><strong>Datos de salud y bienestar:</strong> nivel de actividad física, hábitos de sueño, presión arterial, frecuencia cardíaca, historial médico declarado, enfermedades crónicas, medicación frecuente y antecedentes familiares.</li>
                  <li><strong>Datos de uso de la aplicación:</strong> interacciones, resultados de cuestionarios, recomendaciones visualizadas o aceptadas, frecuencia de uso y configuración personalizada.</li>
                  <li><strong>Datos técnicos:</strong> tipo de dispositivo, sistema operativo, versión de la app, dirección IP, cookies e identificadores de sesión.</li>
                  <li><strong>Datos de localización (opcional):</strong> únicamente si concedes permiso, para ofrecer consejos adaptados a tu entorno.</li>
                  <li><strong>Datos de pago:</strong> en caso de suscripción a la versión Premium, procesados mediante proveedores externos seguros (no almacenamos los datos de tu tarjeta), pero podremos conservar información de facturación o suscripciones activas.</li>
                </ul>
              </section>

              <section id="uso-datos" className="scroll-mt-24">
                <h2>4. Cómo Usamos Tus Datos</h2>
                <p>
                  Tratamos tus datos personales con distintas finalidades y siempre bajo las bases legales apropiadas (consentimiento, ejecución de contrato, interés legítimo o cumplimiento legal):
                </p>
                <ul>
                  <li>Ofrecerte el servicio principal de <strong>recomendaciones personalizadas de salud</strong> según tus características y parámetros biomédicos.</li>
                  <li>Elaborar evaluaciones orientativas sobre posibles revisiones médicas o pruebas diagnósticas sugeridas.</li>
                  <li>En la versión Premium, facilitar la orientación hacia especialistas médicos o áreas de salud adecuadas a tus síntomas o condiciones.</li>
                  <li>Mejorar la precisión del análisis mediante estadísticas y aprendizaje automatizado (datos agregados y anonimizados).</li>
                  <li>Enviar recordatorios, alertas o notificaciones relacionadas con tu bienestar, revisiones o seguimiento de objetivos.</li>
                  <li>Garantizar la seguridad, prevenir el uso indebido del servicio y cumplir con obligaciones legales.</li>
                  <li>Comunicar novedades, actualizaciones o cambios relevantes en los términos de uso y la política de privacidad.</li>
                </ul>
                <p>
                  <strong>Nunca utilizamos tus datos de salud con fines comerciales sin tu consentimiento explícito.</strong>
                </p>
              </section>

              <section id="compartir" className="scroll-mt-24">
                <h2>5. Con Quién Compartimos Tus Datos</h2>
                <p>
                  Saludcheck365 comparte información únicamente en los siguientes casos y bajo estrictas medidas de confidencialidad:
                </p>
                <ul>
                  <li>Con <strong>proveedores tecnológicos</strong> (hosting, mantenimiento, analítica, almacenamiento seguro en la nube).</li>
                  <li>Con <strong>profesionales médicos o especialistas</strong>, exclusivamente si contratas la versión Premium y autorizas expresamente el intercambio de datos.</li>
                  <li>Con <strong>autoridades competentes</strong>, sólo si estamos legalmente obligados o en caso de requerimientos judiciales.</li>
                  <li>Con <strong>procesadores externos de pago</strong>, para la gestión de suscripciones o compras dentro de la aplicación, cumpliendo siempre con los estándares de seguridad PCI-DSS.</li>
                </ul>
                <p>
                  En ningún caso vendemos ni cedemos tu información personal a terceros con fines publicitarios.
                </p>
              </section>

              <section id="conservacion" className="scroll-mt-24">
                <h2>6. Plazo de Conservación</h2>
                <p>
                  Conservaremos tus datos mientras mantengas tu cuenta activa o mientras sea necesario para prestarte el servicio. Si decides eliminar tu cuenta, los datos se suprimirán en un plazo máximo de <strong>45 días</strong>, salvo aquellos que deban conservarse por motivos legales o de facturación.
                </p>
              </section>

              <section id="seguridad" className="scroll-mt-24">
                <h2>7. Seguridad de la Información</h2>
                <p>
                  Implementamos medidas técnicas y organizativas avanzadas para proteger tu información contra accesos no autorizados, pérdida o alteración. Entre ellas se incluyen sistemas de cifrado, protocolos SSL, verificación en dos pasos y servidores seguros en la UE.
                </p>
                <p>
                  Realizamos auditorías de seguridad periódicas y, en caso de detectarse una brecha que pudiera afectar a tus datos personales, te notificaríamos en un plazo máximo de <strong>72 horas</strong>, cumpliendo con el RGPD.
                </p>
              </section>

              <section id="derechos" className="scroll-mt-24">
                <h2>8. Tus Derechos</h2>
                <p>
                  Como usuario, dispones de los siguientes derechos respecto a tus datos personales:
                </p>
                <ul>
                  <li><strong>Acceso:</strong> conocer qué información tratamos sobre ti.</li>
                  <li><strong>Rectificación:</strong> corregir datos incorrectos o incompletos.</li>
                  <li><strong>Supresión:</strong> solicitar la eliminación de tus datos cuando ya no sean necesarios.</li>
                  <li><strong>Limitación:</strong> restringir temporalmente el tratamiento de ciertos datos.</li>
                  <li><strong>Portabilidad:</strong> solicitar la transferencia de tus datos a otro proveedor.</li>
                  <li><strong>Oposición:</strong> rechazar ciertos tratamientos, especialmente los basados en intereses legítimos o marketing.</li>
                  <li><strong>Retirada del consentimiento:</strong> en tratamientos basados en tu autorización expresa (por ejemplo, datos de salud).</li>
                </ul>
                <p>
                  Para ejercer tus derechos, puedes escribirnos a <a href="mailto:saludcheck365@gmail.com">saludcheck365@gmail.com</a>, indicando el derecho que deseas ejercer. También puedes dirigirte a la Agencia Española de Protección de Datos (AEPD) si consideras que hemos infringido tus derechos.
                </p>
              </section>

              <section id="menores" className="scroll-mt-24">
                <h2>9. Política sobre Menores</h2>
                <p>
                  Saludcheck365 no está dirigida a menores de 16 años. No recopilamos deliberadamente información de menores, y si detectamos datos de un niño o adolescente sin consentimiento válido, procederemos a su eliminación inmediata. Los perfiles de usuarios de 16 a 18 años contarán con mayores niveles de privacidad y acceso limitado.
                </p>
              </section>

              <section id="cookies" className="scroll-mt-24">
                <h2>10. Cookies y Tecnologías Similares</h2>
                <p>
                  Utilizamos cookies y tecnologías análogas para mejorar la experiencia en la aplicación:
                </p>
                <ul>
                  <li><strong>Cookies esenciales:</strong> necesarias para el correcto funcionamiento del servicio.</li>
                  <li><strong>Cookies de personalización:</strong> recuerdan tus ajustes y preferencias.</li>
                  <li><strong>Cookies de analítica:</strong> nos ayudan a mejorar el rendimiento y usabilidad.</li>
                  <li><strong>Cookies de marketing (opcional):</strong> se usan únicamente con tu consentimiento previo.</li>
                </ul>
                <p>
                  Puedes modificar tus preferencias desde la configuración de la app o tu dispositivo.
                </p>
              </section>

              <section id="transferencias" className="scroll-mt-24">
                <h2>11. Transferencias Internacionales</h2>
                <p>
                  Nuestros servidores principales se alojan en la Unión Europea. En caso de colaboración con proveedores ubicados fuera del EEE, establecemos cláusulas contractuales tipo aprobadas por la Comisión Europea para garantizar un nivel de protección adecuado.
                </p>
              </section>

              <section id="cambios" className="scroll-mt-24">
                <h2>12. Cambios en esta Política</h2>
                <p>
                  Podremos actualizar la presente Política de Privacidad cuando se produzcan cambios legales o técnicos. En tal caso, te informaremos mediante la propia aplicación o por correo electrónico antes de que los cambios sean efectivos.
                </p>
              </section>

              <section id="contacto" className="scroll-mt-24">
                <h2>13. Contacto</h2>
                <p>
                  Si tienes preguntas sobre el manejo de tus datos personales o deseas ejercer tus derechos, puedes contactarnos:
                </p>
                <div className="bg-gradient-to-r from-[#00CED1]/10 to-[#4A90E2]/10 rounded-2xl p-6 border border-[#00CED1]/20 mt-6">
                  <div className="flex items-center gap-3 mb-2">
                    <Mail className="w-5 h-5 text-[#00CED1]" />
                    <h3 className="text-lg font-semibold text-brand-blue m-0">Email de contacto</h3>
                  </div>
                  <a href="mailto:saludcheck365@gmail.com" className="text-[#00CED1] hover:text-[#00b8bb] font-medium text-lg no-underline">
                    saludcheck365@gmail.com
                  </a>
                </div>
              </section>

              <div className="mt-16 pt-8 border-t border-gray-200">
                <p className="text-sm text-gray-500 text-center">
                  Última actualización: Diciembre 2025
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;