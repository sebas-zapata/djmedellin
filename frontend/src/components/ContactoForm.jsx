import { useState } from "react";
import axios from "axios";

export default function ContactoForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [success, setSuccess] = useState(null);

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async e => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:4000/api/contacto", form);
      setSuccess("✅ Mensaje enviado correctamente");
      setForm({ nombre: "", email: "", mensaje: "" });
    } catch (err) {
      setSuccess("❌ Error al enviar el mensaje");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white shadow p-6 rounded-lg max-w-md">
      <input
        type="text"
        name="nombre"
        placeholder="Tu nombre"
        value={form.nombre}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />
      <input
        type="email"
        name="email"
        placeholder="Tu correo"
        value={form.email}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />
      <textarea
        name="mensaje"
        placeholder="Tu mensaje"
        value={form.mensaje}
        onChange={handleChange}
        className="w-full border p-2 mb-3 rounded"
      />
      <button className="bg-blue-600 text-white px-4 py-2 rounded">Enviar</button>
      {success && <p className="mt-3">{success}</p>}
    </form>
  );
}
