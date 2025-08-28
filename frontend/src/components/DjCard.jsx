export default function DjCard({ dj }) {
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
        <h2 className="card-title fs-4 fw-bold mb-2">{dj.nombre}</h2>
        <p className="card-text small opacity-75">
          {dj.genero}
        </p>
        <p className="card-text small opacity-75">{dj.descripcion}</p>
      </div>
    </div>
  );
}
