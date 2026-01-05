import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { ArrowLeft, FileText, Users, Shield, CreditCard, Copyright, AlertTriangle, Scale, Mail, Clock } from 'lucide-react';
import { motion } from 'framer-motion';

const TermsOfUse = () => {
  const [activeSection, setActiveSection] = useState('');

  const sections = [
    { id: 'disposiciones', title: '1. Disposiciones Generales', icon: FileText },
    { id: 'registro', title: '2. Registro de Cuenta', icon: Users },
    { id: 'alcance', title: '3. Alcance de los Servicios', icon: Shield },
    { id: 'pagos', title: '4. Pagos y Suscripciones', icon: CreditCard },
    { id: 'propiedad', title: '5. Propiedad Intelectual', icon: Copyright },
    { id: 'conducta', title: '6. Conducta del Usuario', icon: AlertTriangle },
    { id: 'limitacion', title: '7. Limitación de Responsabilidad', icon: Shield },
    { id: 'legislacion', title: '8. Legislación Aplicable', icon: Scale },
    { id: 'cambios-terminos', title: '9. Cambios en los Términos', icon: Clock },
    { id: 'disposiciones-finales', title: '10. Disposiciones Finales', icon: FileText },
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
      <Helmet>
        <title>Términos de Uso - SaludCheck365</title>
        <meta name="description" content="Términos de uso de SaludCheck365. Lee nuestras condiciones de servicio y uso de la plataforma." />
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
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-6">
                <Scale className="w-4 h-4 text-purple-600" />
                <span className="text-sm font-semibold text-gray-700">Actualizado: Diciembre 2025</span>
              </div>
              <h1 className="text-5xl md:text-6xl font-bold text-brand-blue mb-6 leading-tight">
                Términos de <span className="gradient-text">Uso</span>
              </h1>
              <p className="text-xl text-gray-600 leading-relaxed max-w-3xl">
                Lee atentamente estos términos antes de utilizar SaludCheck365. Al usar nuestra aplicación, aceptas estas condiciones.
              </p>
            </div>

            {/* Content */}
            <div className="bg-white rounded-3xl shadow-xl border border-gray-100 p-8 md:p-12 legal-content">

              <section id="disposiciones" className="scroll-mt-24">
                <h2>1. Disposiciones Generales y Aceptación de los Términos</h2>
                <p>
                  El acceso y uso de la aplicación móvil Saludcheck365, de su página web asociada y de todos los servicios digitales vinculados (en adelante, los "Servicios"), se rigen por los presentes Términos de Uso (en adelante, los "Términos"). Estos Términos establecen un acuerdo legal y vinculante entre tú, como usuario de la aplicación (en adelante, el "usuario"), y la sociedad <strong>Saludcheck365</strong>, con domicilio social en Barcelona, España, inscrita en el Registro Mercantil correspondiente (en adelante, "Saludcheck365", "nosotros" o "la compañía").
                </p>
                <p>
                  Al descargar, registrarte, acceder o utilizar los Servicios de cualquier modo, aceptas de forma expresa, plena y sin reservas estos Términos y nuestra Política de Privacidad. Si no estás de acuerdo con alguna de sus disposiciones, deberás abstenerte de utilizar la aplicación.
                </p>
                <p>
                  La aceptación de los Términos se considera renovada automáticamente cada vez que accedes a la app o utilizas cualquiera de sus funcionalidades. Saludcheck365 podrá actualizar este documento en cualquier momento y notificará los cambios a través de la aplicación o por correo electrónico. El uso continuado de los Servicios tras dicha actualización implicará tu aceptación de la versión revisada.
                </p>
                <div className="bg-amber-50 border-l-4 border-amber-500 p-6 rounded-r-xl my-6">
                  <p className="text-amber-900 font-medium mb-0">
                    <strong>Importante:</strong> Saludcheck365 actúa como una plataforma tecnológica de información y orientación sanitaria, no como un centro médico ni como sustituto de un profesional de la salud. Los contenidos, evaluaciones, consejos o recomendaciones generados en la aplicación tienen carácter informativo y preventivo, sin constituir diagnóstico ni prescripción médica.
                  </p>
                </div>
              </section>

              <section id="registro" className="scroll-mt-24">
                <h2>2. Registro de Cuenta, Elegibilidad y Veracidad de la Información</h2>
                <p>
                  Para acceder a la mayoría de las funcionalidades de Saludcheck365 es necesario registrarse y crear una cuenta personal. Durante este proceso, deberás proporcionar datos veraces, completos y actualizados como nombre, apellido, correo electrónico, contraseña y, opcionalmente, edad, sexo, altura, peso, estilo de vida, enfermedades conocidas o historial médico.
                </p>
                <p>
                  Al registrarte, garantizas la exactitud y veracidad de la información proporcionada y te comprometes a mantenerla actualizada. La compañía se reserva el derecho de suspender o cancelar tu cuenta si detecta datos falsos o un uso indebido del servicio.
                </p>
                <p>
                  Los Servicios de Saludcheck365 están dirigidos exclusivamente a <strong>mayores de 16 años</strong>. Los menores que usen la aplicación deben contar con el consentimiento expreso de sus padres o tutores legales.
                </p>
                <p>
                  Cada usuario puede tener solo una cuenta personal, intransferible y protegida por credenciales seguras. Eres responsable de la confidencialidad de tu contraseña y de cualquier actividad realizada bajo tu cuenta. En caso de uso no autorizado o sospecha de violación de seguridad, debes notificarlo inmediatamente a <a href="mailto:saludcheck365@gmail.com">saludcheck365@gmail.com</a>.
                </p>
              </section>

              <section id="alcance" className="scroll-mt-24">
                <h2>3. Alcance de los Servicios Saludcheck365</h2>
                <p>
                  Saludcheck365 es una herramienta digital especializada en recomendaciones de salud y bienestar personalizadas, basadas en la información biométrica, hábitos y antecedentes médicos que proporcionas.
                </p>
                <h3>Sus principales funcionalidades incluyen:</h3>
                <ul>
                  <li>Evaluación del perfil de salud en función de edad, sexo, peso, altura, hábitos y estado físico.</li>
                  <li>Generación de consejos personalizados y preventivos para cuidar la salud y mejorar el bienestar.</li>
                  <li>Recomendaciones sobre pruebas médicas o revisiones necesarias según los indicadores de riesgo.</li>
                  <li>Acceso a contenidos educativos y guías sobre nutrición, ejercicio físico y autocuidado.</li>
                  <li>En su versión Premium, orientación sobre el tipo de especialista más adecuado para cada síntoma, patología o riesgo detectado.</li>
                </ul>
                <p>
                  Saludcheck365 puede modificar, ampliar o eliminar funcionalidades sin previo aviso. Dichos cambios no generarán obligación de compensación o reembolso, salvo disposición contraria de la legislación aplicable.
                </p>
                <div className="bg-red-50 border-l-4 border-red-500 p-6 rounded-r-xl my-6">
                  <p className="text-red-900 font-medium mb-0">
                    <strong>Advertencia:</strong> Los resultados y recomendaciones de la aplicación se basan en algoritmos y modelos predictivos, pero no sustituyen la valoración médica presencial ni el diagnóstico profesional. El usuario es siempre responsable de sus decisiones relacionadas con su salud.
                  </p>
                </div>
              </section>

              <section id="pagos" className="scroll-mt-24">
                <h2>4. Pagos, Suscripciones y Cancelaciones</h2>
                <p>
                  Algunas funcionalidades avanzadas o servicios personalizados de Saludcheck365 requieren pago o suscripción Premium. Las tarifas se abonan por adelantado y pueden variar según el tipo de suscripción (mensual o anual) o la región del usuario.
                </p>
                <p>
                  Los pagos son procesados por proveedores externos seguros, y Saludcheck365 no almacena los datos bancarios ni de tarjetas de crédito del usuario.
                </p>
                <p>
                  Salvo que desactives la opción, las suscripciones se renuevan automáticamente al final de cada periodo contratado. Puedes cancelarlas en cualquier momento desde la configuración de tu cuenta o desde la plataforma (Google Play o App Store) donde realizaste la compra.
                </p>
                <p>
                  Durante un periodo de prueba gratuita, podrás explorar las funciones Premium. Si no cancelas antes del final de la prueba, se aplicará la tarifa correspondiente. En general, no se realizan reembolsos parciales por cancelación anticipada, salvo que la ley disponga lo contrario o exista error imputable a Saludcheck365.
                </p>
              </section>

              <section id="propiedad" className="scroll-mt-24">
                <h2>5. Uso del Contenido y Propiedad Intelectual</h2>
                <p>
                  El usuario conserva los derechos sobre los contenidos que comparta (por ejemplo, comentarios o valoraciones). Sin embargo, al subir o publicar información dentro de la app, concedes a Saludcheck365 una licencia no exclusiva, transferible, gratuita y mundial para usar dicho contenido en el marco de la prestación del servicio.
                </p>
                <p>
                  Todos los elementos gráficos, interfaz, algoritmos, bases de datos, logotipos, textos y software asociados a Saludcheck365 son propiedad exclusiva de Saludcheck365 S.L. o de sus licenciantes. El uso de la aplicación no implica cesión de derechos de propiedad intelectual.
                </p>
                <p>
                  Queda prohibido copiar, modificar, distribuir o explotar los contenidos o estructuras de la app sin autorización expresa de la compañía.
                </p>
              </section>

              <section id="conducta" className="scroll-mt-24">
                <h2>6. Conducta del Usuario y Restricciones de Uso</h2>
                <p>
                  Al utilizar la aplicación, te comprometes a comportarte de manera responsable y respetuosa. No podrás:
                </p>
                <ul>
                  <li>Introducir información falsa, ofensiva o discriminatoria.</li>
                  <li>Usar el servicio con fines comerciales no autorizados o fraudulentos.</li>
                  <li>Alterar o manipular el funcionamiento técnico de la app.</li>
                  <li>Difundir contenido médico o sanitario engañoso.</li>
                </ul>
                <p>
                  Saludcheck365 podrá suspender, limitar o cancelar tu acceso si incumples estas condiciones.
                </p>
              </section>

              <section id="limitacion" className="scroll-mt-24">
                <h2>7. Limitación de Responsabilidad y Exención de Garantías</h2>
                <p>
                  En la medida máxima permitida por la ley, Saludcheck365 no asume responsabilidad por daños directos o indirectos derivados del uso de la app o de las decisiones que tomes en base a sus contenidos.
                </p>
                <p>
                  Los consejos y sugerencias emitidos tienen finalidad educativa y preventiva, por lo que no deben considerarse una consulta médica. La aplicación no diagnostica ni trata enfermedades. Para cualquier cuestión clínica específica deberás acudir a un profesional sanitario cualificado.
                </p>
                <p>
                  En caso de interrupciones técnicas, errores en los resultados o fallos de conexión, Saludcheck365 no garantiza la disponibilidad continua del servicio, aunque adoptará todas las medidas razonables para restablecer su funcionamiento.
                </p>
              </section>

              <section id="legislacion" className="scroll-mt-24">
                <h2>8. Legislación Aplicable y Resolución de Disputas</h2>
                <p>
                  Estos Términos se rigen por la legislación española y de la Unión Europea. En caso de conflicto, las partes se someterán a los tribunales de Barcelona, salvo que la normativa de protección al consumidor disponga otra jurisdicción.
                </p>
                <p>
                  Antes de acudir a la vía judicial, se recomienda intentar una resolución amistosa contactando con el soporte de Saludcheck365 en <a href="mailto:saludcheck365@gmail.com">saludcheck365@gmail.com</a>.
                </p>
              </section>

              <section id="cambios-terminos" className="scroll-mt-24">
                <h2>9. Cambios en los Términos</h2>
                <p>
                  Saludcheck365 podrá modificar estos Términos en cualquier momento. Si se introducen cambios sustanciales, se notificará a los usuarios a través de la aplicación o por correo electrónico. El uso continuado de la app tras los avisos implicará aceptación de las modificaciones.
                </p>
              </section>

              <section id="disposiciones-finales" className="scroll-mt-24">
                <h2>10. Disposiciones Finales</h2>
                <p>
                  Estos Términos constituyen el acuerdo completo entre tú y Saludcheck365 respecto al uso de los Servicios. Si alguna disposición resulta inválida, las restantes seguirán aplicándose plenamente.
                </p>
                <p>
                  La compañía podrá ceder o transferir sus derechos y obligaciones en el marco de procesos corporativos (fusión, adquisición o reestructuración).
                </p>
                <p>
                  Todas las comunicaciones oficiales se realizarán electrónicamente y tendrán la misma validez que si se hubieran entregado en formato físico.
                </p>
              </section>

              <div className="bg-gradient-to-r from-[#00CED1]/10 to-[#4A90E2]/10 rounded-2xl p-6 border border-[#00CED1]/20 mt-12">
                <div className="flex items-center gap-3 mb-4">
                  <Mail className="w-5 h-5 text-[#00CED1]" />
                  <h3 className="text-lg font-semibold text-brand-blue m-0">¿Tienes preguntas?</h3>
                </div>
                <p className="text-gray-700 mb-3">
                  Si tienes dudas sobre estos términos o necesitas más información, contáctanos:
                </p>
                <a href="mailto:saludcheck365@gmail.com" className="text-[#00CED1] hover:text-[#00b8bb] font-medium text-lg no-underline">
                  saludcheck365@gmail.com
                </a>
              </div>

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

export default TermsOfUse;