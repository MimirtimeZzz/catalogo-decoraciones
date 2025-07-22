"use client";

import Link from "next/link";
import { useState } from "react";
import { 
  Sparkles, 
  ArrowLeft, 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  Facebook, 
  Instagram, 
  MessageCircle 
} from "lucide-react";

export default function Contacto() {
  const [formulario, setFormulario] = useState({
    nombre: '',
    email: '',
    telefono: '',
    tipoEvento: '',
    fecha: '',
    presupuesto: '',
    mensaje: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormulario({
      ...formulario,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario
    console.log('Formulario enviado:', formulario);
    alert('¡Gracias por tu mensaje! Te contactaremos pronto.');
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navegación */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-pink-500" />
              <h1 className="text-2xl font-bold text-gray-900">Decoraciones Mágicas</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors">
                Inicio
              </Link>
              <Link href="/catalogo" className="text-gray-700 hover:text-pink-600 transition-colors">
                Catálogo
              </Link>
              <Link href="/contacto" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header de contacto */}
      <section className="py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <Link 
            href="/" 
            className="inline-flex items-center space-x-2 text-pink-600 hover:text-pink-700 mb-8 font-medium"
          >
            <ArrowLeft className="w-4 h-4" />
            <span>Volver al Inicio</span>
          </Link>
          
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Contáctanos
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            ¿Tienes un evento próximo? ¡Nos encantaría ser parte de tu celebración! 
            Cotiza tu decoración sin compromiso.
          </p>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
        <div className="grid lg:grid-cols-3 gap-12">
          
          {/* Formulario de contacto */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Solicita tu Cotización</h3>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="nombre" className="block text-sm font-medium text-gray-700 mb-2">
                      Nombre Completo *
                    </label>
                    <input
                      type="text"
                      id="nombre"
                      name="nombre"
                      value={formulario.nombre}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Tu nombre completo"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email *
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formulario.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="tu@email.com"
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="telefono" className="block text-sm font-medium text-gray-700 mb-2">
                      Teléfono *
                    </label>
                    <input
                      type="tel"
                      id="telefono"
                      name="telefono"
                      value={formulario.telefono}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                      placeholder="Tu número de teléfono"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="tipoEvento" className="block text-sm font-medium text-gray-700 mb-2">
                      Tipo de Evento *
                    </label>
                    <select
                      id="tipoEvento"
                      name="tipoEvento"
                      value={formulario.tipoEvento}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    >
                      <option value="">Selecciona un tipo</option>
                      <option value="boda">Boda</option>
                      <option value="cumpleanos">Cumpleaños</option>
                      <option value="corporativo">Evento Corporativo</option>
                      <option value="baby-shower">Baby Shower</option>
                      <option value="quinceanera">Quinceaños</option>
                      <option value="social">Evento Social</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label htmlFor="fecha" className="block text-sm font-medium text-gray-700 mb-2">
                      Fecha del Evento
                    </label>
                    <input
                      type="date"
                      id="fecha"
                      name="fecha"
                      value={formulario.fecha}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="presupuesto" className="block text-sm font-medium text-gray-700 mb-2">
                      Presupuesto Aproximado
                    </label>
                    <select
                      id="presupuesto"
                      name="presupuesto"
                      value={formulario.presupuesto}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors"
                    >
                      <option value="">Selecciona un rango</option>
                      <option value="500-1000">$500 - $1,000</option>
                      <option value="1000-2500">$1,000 - $2,500</option>
                      <option value="2500-5000">$2,500 - $5,000</option>
                      <option value="5000+">$5,000+</option>
                      <option value="por-definir">Por definir</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label htmlFor="mensaje" className="block text-sm font-medium text-gray-700 mb-2">
                    Cuéntanos sobre tu evento
                  </label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formulario.mensaje}
                    onChange={handleChange}
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-pink-500 focus:border-pink-500 transition-colors resize-none"
                    placeholder="Describe tu evento, temática, número de invitados, ubicación y cualquier detalle especial que tengas en mente..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-pink-500 hover:bg-pink-600 text-white py-4 px-6 rounded-lg font-semibold text-lg flex items-center justify-center space-x-2 transition-colors shadow-lg hover:shadow-xl"
                >
                  <Send className="w-5 h-5" />
                  <span>Enviar Solicitud</span>
                </button>
              </form>
            </div>
          </div>

          {/* Información de contacto y redes sociales */}
          <div className="space-y-8">
            
            {/* Información de contacto */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Información de Contacto</h3>
              
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <Phone className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Teléfono</p>
                    <p className="text-gray-600">+1 (555) 123-4567</p>
                    <p className="text-gray-600">+1 (555) 987-6543</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Mail className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Email</p>
                    <p className="text-gray-600">info@decoracionesmagicas.com</p>
                    <p className="text-gray-600">ventas@decoracionesmagicas.com</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <MapPin className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Ubicación</p>
                    <p className="text-gray-600">Ciudad de México</p>
                    <p className="text-gray-600">Servicio a domicilio</p>
                  </div>
                </div>
                
                <div className="flex items-start space-x-3">
                  <Clock className="w-5 h-5 text-pink-500 mt-1" />
                  <div>
                    <p className="font-medium text-gray-900">Horarios</p>
                    <p className="text-gray-600">Lun - Vie: 9:00 AM - 7:00 PM</p>
                    <p className="text-gray-600">Sáb: 10:00 AM - 4:00 PM</p>
                    <p className="text-gray-600">Dom: Solo emergencias</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Redes sociales */}
            <div className="bg-white rounded-2xl shadow-lg p-6">
              <h3 className="text-xl font-bold text-gray-900 mb-6">Síguenos en Redes Sociales</h3>
              
              <div className="space-y-4">
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-blue-50 to-blue-100 hover:from-blue-100 hover:to-blue-200 transition-all group"
                >
                  <Facebook className="w-6 h-6 text-blue-600" />
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-blue-700">Facebook</p>
                    <p className="text-sm text-gray-600">@decoracionesmagicas</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-pink-50 to-purple-100 hover:from-pink-100 hover:to-purple-200 transition-all group"
                >
                  <Instagram className="w-6 h-6 text-pink-600" />
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-pink-700">Instagram</p>
                    <p className="text-sm text-gray-600">@decoraciones_magicas</p>
                  </div>
                </a>
                
                <a 
                  href="#" 
                  className="flex items-center space-x-3 p-3 rounded-lg bg-gradient-to-r from-green-50 to-green-100 hover:from-green-100 hover:to-green-200 transition-all group"
                >
                  <MessageCircle className="w-6 h-6 text-green-600" />
                  <div>
                    <p className="font-medium text-gray-900 group-hover:text-green-700">WhatsApp</p>
                    <p className="text-sm text-gray-600">+1 (555) 123-4567</p>
                  </div>
                </a>
              </div>
              
              <div className="mt-6 p-4 bg-gradient-to-r from-pink-50 to-purple-50 rounded-lg">
                <p className="text-sm text-gray-600 text-center">
                  <Sparkles className="w-4 h-4 inline mr-1 text-pink-500" />
                  ¡Comparte fotos de tu evento y te haremos una sorpresa especial!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <h5 className="text-xl font-bold">Decoraciones Mágicas</h5>
              </div>
              <p className="text-gray-400">Creando momentos inolvidables desde el corazón</p>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Enlaces</h5>
              <ul className="space-y-2">
                <li><Link href="/" className="text-gray-400 hover:text-white transition-colors">Inicio</Link></li>
                <li><Link href="/catalogo" className="text-gray-400 hover:text-white transition-colors">Catálogo</Link></li>
                <li><Link href="/contacto" className="text-gray-400 hover:text-white transition-colors">Contacto</Link></li>
              </ul>
            </div>
            
            <div>
              <h5 className="text-lg font-semibold mb-4">Síguenos</h5>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Facebook</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">Instagram</a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors">WhatsApp</a>
              </div>
            </div>
          </div>
          
          <div className="mt-8 pt-8 border-t border-gray-800 text-center">
            <p className="text-gray-400">© 2024 Decoraciones Mágicas. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
