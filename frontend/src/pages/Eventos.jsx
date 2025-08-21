import { useEffect, useState } from "react";
import axios from "axios";
import EventoCard from "../components/EventoCard";

export default function Eventos() {
  const [eventos, setEventos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/eventos")
      .then(res => setEventos(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <h1 className="text-3xl font-extrabold mb-6 text-center">Eventos</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {eventos.map(evento => (
          <EventoCard key={evento.id} evento={evento} />
        ))}
      </div>
    </div>
  );
}
