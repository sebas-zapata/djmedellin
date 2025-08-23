export default function EventoCard({ evento }) {
  return (
    <div
      className="card text-white shadow-lg border-0 rounded-4 h-100"
      style={{
        background: "linear-gradient(to right, #a855f7, #ec4899, #ef4444)",
        transition: "transform 0.3s",
      }}
      onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.05)")}
      onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
    >
      <div className="card-body">
        <h2 className="card-title fs-4 fw-bold mb-2">{evento.nombre}</h2>
        <p className="card-text small opacity-75">
          {new Date(evento.fecha).toLocaleDateString()}
        </p>
        <p className="card-text small opacity-75">{evento.lugar}</p>
      </div>
    </div>
  );
}
