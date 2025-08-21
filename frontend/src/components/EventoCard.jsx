export default function EventoCard({ evento }) {
  return (
    <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 text-white shadow-lg p-6 rounded-xl hover:scale-105 transform transition duration-300">
      <h2 className="text-2xl font-bold mb-2">{evento.nombre}</h2>
      <p className="text-sm opacity-80"> {new Date(evento.fecha).toLocaleDateString()}</p>
      <p className="text-sm opacity-80"> {evento.lugar}</p>
      <p className="mt-4 text-base"> DJ: {evento.dj}</p>
    </div>
  );
}
