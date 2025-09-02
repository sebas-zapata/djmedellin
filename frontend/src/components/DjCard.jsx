import { useNavigate } from 'react-router-dom';

export default function DjCard({ dj }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/djs/${dj.id}`);
  };

  return (
    <div 
      className="dj-card card shadow-lg border-0 h-100" 
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-body p-4">
        {/* Nombre del DJ */}
        <h2 className="card-title fs-4 fw-bold mb-3 text-uppercase text-info">
          {dj.nombre}
        </h2>

        {/* Género */}
        <p className="card-text mb-2 text-light small">
          <i className="bi bi-music-note-beamed me-2 text-warning"></i>
          <strong>Género:</strong> {dj.genero}
        </p>

        {/* Descripción */}
        <p className="card-text mb-2 text-light small">
          <i className="bi bi-person-badge me-2 text-success"></i>
          {dj.descripcion}
        </p>
      </div>
    </div>
  );
}
