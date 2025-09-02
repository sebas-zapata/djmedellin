import { useNavigate } from 'react-router-dom';

export default function EventoCard({ evento }) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/eventos/${evento.id}`);
  };

  return (
    <div
      className="evento-card card shadow-lg border-0 h-100"
      onClick={handleClick}
      style={{ cursor: 'pointer' }}
    >
      <div className="card-body p-4">
        {/* Título */}
        <h2 className="card-title fs-4 fw-bold mb-3 text-uppercase text-danger">
          {evento.nombre}
        </h2>

        {/* Fecha */}
        <p className="card-text mb-2 text-light small">
          <i className="bi bi-calendar-event me-2 text-light"></i>
          <strong>Fecha:</strong>{" "}
          {new Date(evento.fecha).toLocaleDateString("es-ES", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* Lugar */}
        <p className="card-text mb-2 text-light small">
          <i className="bi bi-geo-alt me-2 text-success"></i>
          {evento.lugar}
        </p>

        {/* Creado */}
        <p className="card-text mb-2 text-light small">
          <i className="bi bi-clock-history me-2 text-warning"></i>
          <strong>Creado:</strong>{" "}
          {new Date(evento.createdAt).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        {/* Actualizado */}
        <p className="card-text mb-0 text-light small">
          <i className="bi bi-arrow-repeat me-2 text-info"></i>
          <strong>Última actualización:</strong>{" "}
          {new Date(evento.updatedAt).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
      </div>
    </div>
  );
}
