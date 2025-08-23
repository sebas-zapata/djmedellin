import { useEffect, useState } from "react";
import axios from "axios";
import EventoCard from "../components/EventoCard";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/eventos")
      .then((res) => setEventos(res.data))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div className="container py-5">
      {/* Título */}
      <h1 className="text-center mb-5 text-secondary fw-bold">
        🎧 Próximos Eventos de DJs
      </h1>

      {/* Grid de eventos */}
      <div className="row g-4">
        {eventos.map((evento) => (
          <div key={evento.id} className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="card shadow-sm h-100 border-0">
              <EventoCard evento={evento} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
