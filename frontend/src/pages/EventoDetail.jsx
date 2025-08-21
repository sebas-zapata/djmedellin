// src/pages/EventoDetail.jsx
import { useParams } from "react-router-dom";

function EventoDetail() {
  const { id } = useParams();

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Detalle del Evento</h1>
      <p className="text-lg">Mostrando información del evento con ID: {id}</p>
    </div>
  );
}

export default EventoDetail;
