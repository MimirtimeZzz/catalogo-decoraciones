import Link from "next/link";
import { Sparkles, ArrowLeft, Calendar, Users, Briefcase, Baby, Heart } from "lucide-react";

export default function Catalogo() {
  const categorias = [
    {
      id: 1,
      titulo: "Bodas",
      descripcion: "Decoraciones elegantes para el día más especial de tu vida",
      imagen: "/placeholder-boda.jpg",
      icono: <Heart className="w-8 h-8" />,
      color: "bg-gradient-to-br from-pink-100 to-rose-100",
      items: ["Arcos florales", "Mesa de novios", "Centros de mesa", "Iluminación romántica"]
    },
    {
      id: 2,
      titulo: "Cumpleaños",
      descripcion: "Celebra cada año de vida con estilo y diversión",
      imagen: "/placeholder-cumpleanos.jpg",
      icono: <Calendar className="w-8 h-8" />,
      color: "bg-gradient-to-br from-yellow-100 to-orange-100",
      items: ["Globos temáticos", "Mesa dulce", "Photobooth", "Decoración de mesa"]
    },
    {
      id: 3,
      titulo: "Eventos Corporativos",
      descripcion: "Profesionalismo y elegancia para tus eventos empresariales",
      imagen: "/placeholder-corporativo.jpg",
      icono: <Briefcase className="w-8 h-8" />,
      color: "bg-gradient-to-br from-blue-100 to-indigo-100",
      items: ["Branding personalizado", "Escenarios", "Mobiliario elegante", "Señalética"]
    },
    {
      id: 4,
      titulo: "Baby Shower",
      descripcion: "Celebra la dulce espera con decoraciones tiernas",
      imagen: "/placeholder-baby.jpg",
      icono: <Baby className="w-8 h-8" />,
      color: "bg-gradient-to-br from-green-100 to-teal-100",
      items: ["Decoración temática", "Mesa de dulces", "Juegos decorativos", "Recuerdos"]
    },
    {
      id: 5,
      titulo: "Quinceaños",
      descripcion: "Un momento único que merece una celebración especial",
      imagen: "/placeholder-quince.jpg",
      icono: <Sparkles className="w-8 h-8" />,
      color: "bg-gradient-to-br from-purple-100 to-pink-100",
      items: ["Decoración temática", "Pista de baile", "Mesa principal", "Iluminación especial"]
    },
    {
      id: 6,
      titulo: "Eventos Sociales",
      descripcion: "Reuniones, graduaciones y celebraciones familiares",
      imagen: "/placeholder-social.jpg",
      icono: <Users className="w-8 h-8" />,
      color: "bg-gradient-to-br from-emerald-100 to-cyan-100",
      items: ["Decoración versátil", "Ambientación", "Mesas temáticas", "Espacios lounge"]
    }
  ];

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
              <Link href="/" className="text-gray-700 hover:text-pink-600 transition-colors">
                Inicio
              </Link>
              <Link href="/catalogo" className="text-pink-600 font-semibold hover:text-pink-700 transition-colors">
                Catálogo
              </Link>
              <Link href="/contacto" className="text-gray-700 hover:text-pink-600 transition-colors">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Header de catálogo */}
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
            Nuestro Catálogo
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Explora nuestras diferentes categorías de decoración. Cada una diseñada especialmente 
            para hacer de tu evento algo único e inolvidable.
          </p>
        </div>
      </section>

      {/* Grid de categorías */}
      <section className="py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {categorias.map((categoria) => (
              <div 
                key={categoria.id}
                className="group bg-white rounded-2xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden transform hover:scale-105"
              >
                {/* Imagen placeholder */}
                <div className={`h-48 ${categoria.color} flex items-center justify-center relative overflow-hidden`}>
                  <div className="text-gray-400 absolute inset-0 flex flex-col items-center justify-center bg-gradient-to-br from-white/50 to-transparent">
                    {categoria.icono}
                    <p className="mt-2 font-medium">Imagen próximamente</p>
                  </div>
                </div>
                
                {/* Contenido */}
                <div className="p-6">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    {categoria.titulo}
                  </h3>
                  <p className="text-gray-600 mb-4">
                    {categoria.descripcion}
                  </p>
                  
                  {/* Lista de servicios */}
                  <ul className="space-y-2 mb-6">
                    {categoria.items.map((item, index) => (
                      <li key={index} className="flex items-center space-x-2">
                        <Sparkles className="w-4 h-4 text-pink-500" />
                        <span className="text-sm text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                  
                  {/* Botón de cotización */}
                  <Link 
                    href="/contacto"
                    className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 px-6 rounded-full font-semibold text-center block transition-colors"
                  >
                    Cotizar {categoria.titulo}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 lg:px-8">
          <h3 className="text-3xl font-bold text-gray-900 mb-4">
            ¿No encuentras lo que buscas?
          </h3>
          <p className="text-lg text-gray-600 mb-8">
            Creamos decoraciones personalizadas para cualquier tipo de evento. 
            Compártenos tu idea y la haremos realidad.
          </p>
          <Link 
            href="/contacto"
            className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-4 rounded-full font-semibold text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Contactar Ahora
          </Link>
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
