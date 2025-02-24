import React from 'react';
import Footer from '../componentes/footer';
import Image from 'next/image';
import Header from '../componentes/header';

const App = () => {
  // Función helper para manejar rutas de imágenes
  const getImagePath = (path) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/primerizos' : '';
    return `${basePath}${path}`;
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      {/* Hero Section */}
      <section className="w-full bg-gradient-to-r from-[#0F2027] via-[#203A43] to-[#2C5364] text-white py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center px-4">
          <div className="md:w-1/2 py-12 md:py-20 space-y-6">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-[#00D4FF]">
              Descubre <span className="text-[#FFD700]">Consejos</span> Rápidos<br />
              para Padres <span className="text-[#FFD700]">Primerizos</span>
            </h1>

            <p className="text-lg md:text-xl opacity-90 leading-relaxed text-gray-300">
              Accede a información clave en segundos para mejorar la crianza de tu bebé con tecnología y ciencia.
            </p>

            <button className="bg-[#00D4FF] hover:bg-[#008CBA] text-white px-8 py-4 rounded-full text-lg font-medium transition-all duration-300 transform hover:scale-105 shadow-lg">
              Explorar Consejos
            </button>
          </div>

          {/* Imagen Mejorada */}
          <div className="md:w-1/2 mt-12 md:mt-0 flex justify-center">
            <div className="relative w-full max-w-lg">
              <Image
                src={getImagePath('/inicio/limpio.jpg')}
                alt="Familia con bebé"
                width={600}
                height={350} 
                className="object-cover rounded-2xl shadow-2xl transition-transform duration-300 hover:scale-105 hover:shadow-[0px_10px_30px_rgba(0,212,255,0.3)]"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default App;
