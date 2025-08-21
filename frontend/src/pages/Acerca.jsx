// src/pages/Acerca.jsx
function Acerca() {
  return (
    <div className="text-center">
      <h1 className="text-3xl font-bold mb-4">Acerca de Nosotros</h1>
      <p className="text-lg text-gray-600 mb-4">
        Somos una comunidad apasionada por la música que conecta DJs y fanáticos en Medellín.
      </p>

      {/* Redes sociales */}
      <div className="flex justify-center space-x-6">
        <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-blue-600">
          Facebook
        </a>
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-pink-600">
          Instagram
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-blue-400">
          Twitter
        </a>
      </div>
    </div>
  );
}

export default Acerca;
