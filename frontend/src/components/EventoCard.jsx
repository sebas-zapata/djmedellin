export default function EventoCard({ evento }) {
  return (
    <div
      className="card bg-danger text-white shadow-lg border-0 rounded-4 h-100"
      style={{
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="card-body">
        <h2 className="card-title fs-4 fw-bold mb-2">{evento.nombre}</h2>
        <p className="card-text small opacity-75">
          <strong>Fecha del evento:</strong>{" "}
          {new Date(evento.fecha).toLocaleDateString("es-ES", {
            weekday: "long", // día de la semana
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>

        <p className="card-text small opacity-75">{evento.lugar}</p>
        <p className="card-text small opacity-75">
          <strong>Creado:</strong>{" "}
          {new Date(evento.createdAt).toLocaleDateString("es-ES", {
            day: "numeric",
            month: "long",
            year: "numeric",
          })}
        </p>
        <p className="card-text small opacity-75">
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
