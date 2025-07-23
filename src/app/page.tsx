import Link from "next/link";
import { Sparkles, Star, Heart } from "lucide-react";

export default function Inicio() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-pink-50 via-white to-purple-50">
      {/* Navegación */}
      <nav className="bg-white/80 backdrop-blur-md shadow-sm border-b border-pink-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Sparkles className="w-8 h-8 text-pink-500" />
              <h1 className="text-2xl font-bold text-gray-900">Entre Amigos & Party Events</h1>
            </div>
            <div className="hidden md:flex space-x-8">
              <Link href="/" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                Inicio
              </Link>
              <Link href="/catalogo" className="text-gray-700 hover:text-pink-600 transition-colors">
                Catálogo
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-pink-600 transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl font-extrabold text-gray-900 mb-6">
            Convierte tus <span className="text-pink-500">momentos especiales</span> en recuerdos inolvidables
          </h2>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Especialistas en decoración para bodas, cumpleaños, eventos corporativos y celebraciones únicas. 
            Cada detalle diseñado para hacer de tu evento algo extraordinario.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              href="/catalogo" 
              className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Ver Catálogo
            </Link>
            <Link 
              href="/contacto" 
              className="border-2 border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors"
            >
              Cotizar Evento
            </Link>
          </div>
        </div>
      </section>

      {/* Características destacadas */}
      <section className="py-16 bg-white">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 mb-4">¿Por qué elegirnos?</h3>
            <p className="text-lg text-gray-600">Experiencia, calidad y atención personalizada en cada proyecto</p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50">
              <Star className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Calidad Premium</h4>
              <p className="text-gray-600">Materiales de primera calidad y acabados impecables en cada decoración</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-purple-50 to-pink-50">
              <Heart className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Diseño Personalizado</h4>
              <p className="text-gray-600">Cada evento es único, por eso creamos diseños exclusivos para ti</p>
            </div>
            
            <div className="text-center p-6 rounded-lg bg-gradient-to-br from-pink-50 to-purple-50">
              <Sparkles className="w-12 h-12 text-pink-500 mx-auto mb-4" />
              <h4 className="text-xl font-bold text-gray-900 mb-2">Experiencia</h4>
              <p className="text-gray-600">Años de experiencia convirtiendo sueños en realidad</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Sparkles className="w-6 h-6 text-pink-500" />
                <h5 className="text-xl font-bold">Entre Amigos & Party Events</h5>
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
            <p className="text-gray-400">© 2024 Entre Amigos & Party Events. Todos los derechos reservados.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
