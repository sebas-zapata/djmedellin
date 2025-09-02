function Footer() {
  return (
    <footer className="bg-black text-white py-6 text-center">
  <p className="text-sm sm:text-base">© 2025 <span className="text-red-600 font-semibold">DJ Medellín</span>. Todos los derechos reservados.</p>
  
  <div className="flex justify-center gap-6 mt-4">
    <a  
      href="https://facebook.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-red-600 hover: transition-colors text-decoration-none m-2"
    >
      Facebook
    </a>
    <a 
      href="https://instagram.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-decoration-none m-2 hover:text-red-600 transition-colors"
    >
      Instagram
    </a>
    <a 
      href="https://twitter.com" 
      target="_blank" 
      rel="noopener noreferrer"
      className="text-decoration-none m-2 hover:text-red-600 transition-colors"
    >
      Twitter
    </a>
  </div>
</footer>
  );
}

export default Footer;
