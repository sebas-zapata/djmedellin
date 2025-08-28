import { useEffect, useState } from "react";
import axios from "axios";
import DjCard from "../components/DjCard";

export default function Djs() {
  const [djs, setDjs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/cantantes")
      .then(res => setDjs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="container py-5">
      {/* Título */}
      <h1 className="text-center mb-5 text-dark fw-bold">
        Cantantes de DJs {djs.length}
      </h1>

      {/* Grid de eventos */}
      <div className="row g-4">
        {djs.map((dj) => (
          <div key={dj.id} className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="card shadow-sm h-100 border-0">
              <DjCard dj={dj} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
