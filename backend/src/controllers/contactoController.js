// Importar el modelo de Contacto
const Contacto = require("../models/Contacto");

// Controlador para manejar los mensajes de contacto
exports.enviarMensaje = async (req, res) => {
  const { nombre, email, mensaje } = req.body;
  // Extrae los campos del body de la solicitud

  // Validación básica de campos requeridos
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
    // Responde con error 400 si falta algún dato
  }
  try {
    // Guardar en la base de datos
    const nuevoMensaje = await Contacto.create({ nombre, email, mensaje });

    console.log("📩 Nuevo mensaje guardado:", nuevoMensaje.toJSON());

    res.status(200).json({
      success: true,
      message: "Mensaje recibido y almacenado correctamente",
      data: nuevoMensaje,
    });
  } catch (error) {
    console.error("❌ Error al guardar el mensaje:", error);
    res.status(500).json({ error: "Error al guardar el mensaje" });
  }
};
