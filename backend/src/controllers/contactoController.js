// Controlador para manejar los mensajes de contacto

exports.enviarMensaje = (req, res) => {
  const { nombre, email, mensaje } = req.body; 
  // Extrae los campos del body de la solicitud

  // Validación básica de campos requeridos
  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" }); 
    // Responde con error 400 si falta algún dato
  }

  // --------------------
  // Lógica de negocio (actualmente solo se imprime en consola)
  // --------------------
  // Aquí podrías implementar:
  // - Guardar el mensaje en la base de datos
  // - Enviar un correo de notificación
  // - Notificar vía WhatsApp u otros canales
  console.log("📩 Nuevo mensaje de contacto:", { nombre, email, mensaje });

  // Respuesta exitosa
  res.status(200).json({ 
    success: true, 
    message: "Mensaje recibido correctamente" 
  });
};
