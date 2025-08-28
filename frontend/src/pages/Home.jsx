// src/pages/Home.jsx
function Home() {
  return (
    <div className="d-flex flex-column justify-content-center align-items-center text-center min-vh-100">
      {/* Título */}
      <h1 className="display-3 fw-bold mb-4">
        Bienvenido a <span className="text-danger">DJ Medellín</span>
      </h1>

      {/* Descripción */}
      <p className="lead mb-5">
        Descubre los mejores DJs, vibra con los eventos más épicos y sumérgete en la cultura musical de Medellín.
      </p>

      {/* Botón */}
      <a
        href="/djs"
        className="btn btn-danger btn-lg px-4 shadow-sm fw-semibold"
      >
        Explorar DJs
      </a>
    </div>
  );
}

export default Home;
