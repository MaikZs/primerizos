import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const getImagePath = (path) => {
    const basePath = process.env.NODE_ENV === 'production' ? '/primerizos' : '';
    return `${basePath}${path}`;
  };

  const redesSociales = [
    { 
      name: 'facebook', 
      url: 'https://facebook.com/tu-pagina',
      icon: '/incons/fb.svg' 
    },
    { 
      name: 'instagram', 
      url: 'https://instagram.com/tu-cuenta',
      icon: '/incons/ig.svg'  
    },
    { 
      name: 'twitter', 
      url: 'https://twitter.com/tu-usuario',
      icon: '/incons/x.svg'  
    },
    { 
      name: 'youtube', 
      url: 'https://youtube.com/tu-canal',
      icon: '/incons/yt.svg'  
    }
  ];

  const quickLinks = [
    'Inicio',
    'Modulos',
    'Consejos Rapidos',
    'Contacto',
    'Libro de Reclamaciones'
  ];

  return (
    <footer className="footer-container">
      <div className="footer-content">
        <div className="footer-grid">
          
          {/* Columna 1: Logo y descripción */}
          <div className="footer-column">
            <h3 className="footer-title">BabyCare</h3>
            <p className="footer-text">
              Tu compañero esencial en la aventura de la paternidad. Ofrecemos recursos prácticos 
              y cursos accesibles para padres primerizos.
            </p>
          </div>

          {/* Columna 2: Enlaces rápidos */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Enlaces Rápidos</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link}>
                  <Link href="#" className="footer-link">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Columna 3: Contacto */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Contacto</h4>
            <div className="contact-info">
              <p className="contact-item">
                <Image
                  src={getImagePath('/incons/email.svg')}
                  alt="Email"
                  width={20}
                  height={20}
                  className="contact-icon"
                />
                info@babycare.com
              </p>
              <p className="contact-item">
                <Image
                  src={getImagePath('/incons/telefono.svg')}
                  alt="Teléfono"
                  width={20}
                  height={20}
                  className="contact-icon"
                />
                +51 987 654 321 
              </p>
              <p className="contact-item">
                <Image
                  src={getImagePath('/incons/location.svg')}
                  alt="Ubicación"
                  width={20}
                  height={20}
                  className="contact-icon"
                />
                Distrito Miraflores, Lima-Perú
              </p>
            </div>
          </div>

          {/* Columna 4: Redes Sociales */}
          <div className="footer-column">
            <h4 className="footer-subtitle">Síguenos</h4>
            <div className="social-links">
              {redesSociales.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                >
                  <Image
                    src={getImagePath(social.icon)}
                    alt={`Icono ${social.name}`}
                    width={24}
                    height={24}
                    className="social-icon"
                  />
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Divisor */}
        <div className="footer-divider" />

        {/* Copyright */}
        <div className="footer-copyright">
          <p>
            © {new Date().getFullYear()} BabyCare. Todos los derechos reservados. | 
            <Link href="#" className="hover:text-[#FF6FB0] ml-2">
              Política de Privacidad
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
