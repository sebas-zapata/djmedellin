import { useEffect, useState } from "react";
import EventoCard from "../components/EventoCard";
import { getEventos } from "../services/eventoService";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchEventos = async () => {
      try {
        setCargando(true);
        const data = await getEventos();
        setEventos(data);
      } catch (error) {
        console.error("Error al cargar eventos:", error);
      } finally {
        setCargando(false);
      }
    };
    fetchEventos();
  }, []);

  return (
    <div className="container py-5">
      {/* Título */}
      <h1 className="text-center mb-5 fw-bold" style={{ color: "#17a2b8" }}>
        {cargando ? (
          <div className="d-flex flex-column align-items-center">
            {/* Spinner */}
            <div className="spinner-border text-info" role="status">
              <span className="visually-hidden">Cargando...</span>
            </div>
            <p className="mt-3">Cargando eventos...</p>
          </div>
        ) : (
          <>
            <i className="bi bi-calendar-event-fill"></i> Próximos Eventos de DJs{" "}
            {eventos.length}
          </>
        )}
      </h1>

      {/* Grid de eventos */}
      {!cargando && (
        <div className="row g-4">
          {eventos.map((evento) => (
            <div key={evento.id} className="col-12 col-sm-6 col-md-4 col-lg-4">
              <div className="card shadow-sm h-100 border-0">
                <EventoCard evento={evento} />
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
