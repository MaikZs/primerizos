import React from 'react';
import Image from 'next/image';

const ModulosPage = () => {
  // Función helper para manejar rutas de imágenes
  const getImagePath = (path) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/primerizos' : '';
    return `${basePath}${path}`;
  };

  const modules = [
    {
      title: "Nutrición Infantil",
      description: "Aprende conceptos esenciales con contenido claro y estructurado.",
      image: "/inicio/mod/001.jpg",
      color: "text-pink-500"
    },
    {
      title: "Rutinas de Sueño",
      description: "Aprende conceptos esenciales con contenido claro y estructurado.",
      image: "/inicio/mod/002.webp",
      color: "text-purple-500"
    },
    {
      title: "Desarrollo Cognitivo",
      description: "Aprende conceptos esenciales con contenido claro y estructurado.",
      image: "/inicio/mod/003.jpg",
      color: "text-blue-500"
    },
    {
      title: "Primeros Auxilios",
      description: "Aprende conceptos esenciales con contenido claro y estructurado.",
      image: "/inicio/mod/004.jpg",
      color: "text-red-500"
    },
    {
      title: "Vínculo Afectivo",
      description: "Aprende conceptos esenciales con contenido claro y estructurado.",
      image: "/inicio/mod/005.jpg",
      color: "text-rose-500"
    },
    {
      title: "Seguridad en el Hogar",
      description: "Aprende conceptos esenciales con contenido claro y estructurado.",
      image: "/inicio/mod/006.webp",
      color: "text-orange-500"
    }
  ];

  return (
    <main className="min-h-screen bg-gray-50 py-16">
      <div className="max-w-7xl mx-auto px-4">
        <h1 className="text-4xl font-serif text-center text-gray-800 mb-12">
          Módulos de Aprendizaje
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {modules.map((module, index) => (
            <div 
              key={index} 
              className="bg-white rounded-2xl shadow-lg overflow-hidden transition-all duration-300 hover:shadow-xl hover:transform hover:scale-105"
            >
              <div className="relative h-48 w-full">
                <Image
                  src={getImagePath(module.image)}
                  alt={module.title}
                  fill
                  className="object-cover"
                  priority={index < 3}
                />
              </div>
              <div className="p-6">
                <h3 className={`text-xl font-semibold mb-3 ${module.color}`}>
                  {module.title}
                </h3>
                <p className="text-gray-600 mb-4">
                  {module.description}
                </p>
                <button className="w-full bg-cyan-500 text-white py-2 px-4 rounded-full hover:bg-cyan-600 transition-colors duration-300">
                  Ver más
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
};

export default ModulosPage;
