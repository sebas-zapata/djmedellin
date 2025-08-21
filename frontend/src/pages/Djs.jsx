import { useEffect, useState } from "react";
import axios from "axios";
import DjCard from "../components/DjCard";

export default function Djs() {
  const [djs, setDjs] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:4000/api/djs")
      .then(res => setDjs(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4">Nuestros DJs</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {djs.map(dj => (
          <DjCard key={dj.id} dj={dj} />
        ))}
      </div>
    </div>
  );
}
