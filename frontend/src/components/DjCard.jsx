export default function DjCard({ dj }) {
  return (
    <div className="bg-white shadow p-4 rounded-lg">
      <h2 className="text-xl font-semibold">{dj.nombre}</h2>
      <p className="text-gray-600">{dj.genero}</p>
      <p className="text-sm">{dj.descripcion}</p>
    </div>
  );
}
