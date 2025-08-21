// src/pages/DJDetail.jsx
import { useParams } from "react-router-dom";

function DJDetail() {
  const { id } = useParams();

  // Aquí luego podemos traer los datos reales desde una API o un JSON
  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Detalle del DJ</h1>
      <p className="text-lg">Mostrando información del DJ con ID: {id}</p>
    </div>
  );
}

export default DJDetail;
