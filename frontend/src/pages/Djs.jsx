import { useEffect, useState } from "react";
import axios from "axios";
import DjCard from "../components/DjCard";
import { getDjs } from "../services/djService";

export default function Djs() {
  const [djs, setDjs] = useState([]);
  const [cargando, setCargando] = useState(true);

  useEffect(() => {
    const fetchDjs = async () => {
      try {
        setCargando(true);
        const data = await getDjs();
        setDjs(data);
      } catch (error) {
        console.error("Error al cargar DJs:", error);
      } finally {
        setCargando(false);
      }
    };
    fetchDjs();
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
          <p className="mt-3">Cargando cantantes...</p>
        </div>
      ) : (
        <>
          <i className="bi bi-music-note-beamed"></i> Cantantes de DJs {djs.length}
        </>
      )}
    </h1>

    {/* Grid de DJs */}
    {!cargando && (
      <div className="row g-4">
        {djs.map((dj) => (
          <div key={dj.id} className="col-12 col-sm-6 col-md-4 col-lg-4">
            <div className="card shadow-sm h-100 border-0">
              <DjCard dj={dj} />
            </div>
          </div>
        ))}
      </div>
    )}
  </div>
);

}
