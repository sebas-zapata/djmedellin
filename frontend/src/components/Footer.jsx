import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-black text-white py-6 w-full">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center justify-center text-center">
          {/* Texto de derechos reservados */}
          <p className="text-gray-400 text-sm mb-4 w-full">
            © {currentYear} DJ Medellín. Todos los derechos reservados.
          </p>
          
          {/* Título de redes sociales */}
          <h3 className="text-white text-lg font-medium mb-3 w-full">Síguenos</h3>
          
          {/* Iconos de redes sociales */}
          <div className="flex justify-center space-x-10 w-full">
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-blue-400 transition-colors"
              aria-label="Facebook"
            >
              <i className="bi bi-facebook text-2xl"></i>
            </a>
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-pink-500 transition-colors"
              aria-label="Instagram"
            >
              <i className="bi bi-instagram text-2xl"></i>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition-colors"
              aria-label="YouTube"
            >
              <i className="bi bi-youtube text-2xl"></i>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
