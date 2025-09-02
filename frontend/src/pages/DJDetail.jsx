import { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getDjById } from '../services/djService';

export default function DJDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [dj, setDj] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDj = async () => {
      try {
        setLoading(true);
        const data = await getDjById(id);
        setDj(data);
      } catch (err) {
        console.error('Error fetching DJ:', err);
        setError('No se pudo cargar la información del DJ');
      } finally {
        setLoading(false);
      }
    };

    fetchDj();
  }, [id]);

  if (loading) {
    return (
      <div className="d-flex justify-content-center align-items-center" style={{ minHeight: '60vh' }}>
        <div className="spinner-border text-info" role="status">
          <span className="visually-hidden">Cargando...</span>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container py-5">
        <div className="alert alert-danger text-center" role="alert">
          {error}
          <div className="mt-3">
            <button 
              onClick={() => navigate(-1)} 
              className="btn btn-outline-secondary"
            >
              <i className="bi bi-arrow-left me-2"></i>Volver a la lista
            </button>
          </div>
        </div>
      </div>
    );
  }

  if (!dj) {
    return (
      <div className="container py-5">
        <div className="alert alert-warning text-center" role="alert">
          No se encontró el DJ solicitado
          <div className="mt-3">
            <button 
              onClick={() => navigate(-1)} 
              className="btn btn-outline-secondary"
            >
              <i className="bi bi-arrow-left me-2"></i>Volver a la lista
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <button 
        onClick={() => navigate(-1)} 
        className="btn btn-outline-secondary mb-4"
      >
        <i className="bi bi-arrow-left me-2"></i>Volver
      </button>

      <div className="row g-4">
        {/* Columna de la imagen */}
        <div className="col-12 col-md-5 col-lg-4">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body text-center p-4">
              <div className="rounded-circle overflow-hidden mx-auto mb-3" style={{ width: '200px', height: '200px' }}>
                <img 
                  src={dj.imagen || 'https://via.placeholder.com/200'} 
                  alt={dj.nombre}
                  className="img-fluid h-100 w-100 object-fit-cover"
                />
              </div>
              <h1 className="h3 fw-bold text-uppercase text-info">{dj.nombre}</h1>
              <div className="badge bg-warning text-dark mb-3">{dj.genero}</div>
              
              <div className="d-flex justify-content-center gap-3 mt-3">
                {dj.instagram && (
                  <a href={dj.instagram} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <i className="bi bi-instagram fs-4 text-danger"></i>
                  </a>
                )}
                {dj.spotify && (
                  <a href={dj.spotify} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <i className="bi bi-spotify fs-4 text-success"></i>
                  </a>
                )}
                {dj.youtube && (
                  <a href={dj.youtube} target="_blank" rel="noopener noreferrer" className="text-decoration-none">
                    <i className="bi bi-youtube fs-4 text-danger"></i>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Columna de la información */}
        <div className="col-12 col-md-7 col-lg-8">
          <div className="card shadow-sm border-0 h-100">
            <div className="card-body p-4">
              <h2 className="h4 fw-bold mb-4 text-uppercase">Sobre {dj.nombre.split(' ')[0]}</h2>
              
              <div className="mb-4">
                <h3 className="h5 fw-bold text-uppercase mb-3">Biografía</h3>
                <p className="mb-0">{dj.descripcion || 'No hay biografía disponible.'}</p>
              </div>

              <div className="row g-4">
                {dj.experiencia && (
                  <div className="col-12 col-md-6">
                    <div className="bg-light p-3 rounded">
                      <h4 className="h6 fw-bold text-uppercase mb-2">
                        <i className="bi bi-award text-info me-2"></i>Experiencia
                      </h4>
                      <p className="mb-0">{dj.experiencia}</p>
                    </div>
                  </div>
                )}

                {dj.estilo && (
                  <div className="col-12 col-md-6">
                    <div className="bg-light p-3 rounded">
                      <h4 className="h6 fw-bold text-uppercase mb-2">
                        <i className="bi bi-music-note-list text-info me-2"></i>Estilo
                      </h4>
                      <p className="mb-0">{dj.estilo}</p>
                    </div>
                  </div>
                )}
              </div>

              {dj.logros && dj.logros.length > 0 && (
                <div className="mt-4">
                  <h3 className="h5 fw-bold text-uppercase mb-3">Logros Destacados</h3>
                  <ul className="list-group list-group-flush">
                    {Array.isArray(dj.logros) ? (
                      dj.logros.map((logro, index) => (
                        <li key={index} className="list-group-item bg-transparent border-0 px-0 py-2">
                          <i className="bi bi-trophy-fill text-warning me-2"></i>
                          {logro}
                        </li>
                      ))
                    ) : (
                      <li className="list-group-item bg-transparent border-0 px-0 py-2">
                        <i className="bi bi-trophy-fill text-warning me-2"></i>
                        {dj.logros}
                      </li>
                    )}
                  </ul>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
