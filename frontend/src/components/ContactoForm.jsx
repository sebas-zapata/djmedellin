import { useState } from "react";
import axios from "axios";

export default function ContactoForm() {
  const [form, setForm] = useState({ nombre: "", email: "", mensaje: "" });
  const [success, setSuccess] = useState(null);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
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
    <div className="container my-5 d-flex justify-content-center">
      <div className="card shadow-lg p-4 w-100" style={{ maxWidth: "500px" }}>
        <h3 className="text-center mb-4 text-primary">Contacto</h3>

        <form onSubmit={handleSubmit}>
          {/* Nombre */}
          <div className="mb-3">
            <label htmlFor="nombre" className="form-label">
              Nombre
            </label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={form.nombre}
              onChange={handleChange}
              className="form-control"
              placeholder="Tu nombre"
              required
            />
          </div>

          {/* Email */}
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Correo electrónico
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="form-control"
              placeholder="Tu correo"
              required
            />
          </div>

          {/* Mensaje */}
          <div className="mb-3">
            <label htmlFor="mensaje" className="form-label">
              Mensaje
            </label>
            <textarea
              id="mensaje"
              name="mensaje"
              rows="4"
              value={form.mensaje}
              onChange={handleChange}
              className="form-control"
              placeholder="Tu mensaje"
              required
            ></textarea>
          </div>

          {/* Botón */}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Enviar
            </button>
          </div>
        </form>

        {/* Mensaje de estado */}
        {success && (
          <div
            className={`alert mt-3 ${
              success.includes("✅") ? "alert-success" : "alert-danger"
            }`}
          >
            {success}
          </div>
        )}
      </div>
    </div>
  );
}
