exports.enviarMensaje = (req, res) => {
  const { nombre, email, mensaje } = req.body;

  if (!nombre || !email || !mensaje) {
    return res.status(400).json({ error: "Todos los campos son obligatorios" });
  }

  // Por ahora solo devolvemos el mensaje, pero aquí podrías:
  // - Guardar en base de datos
  // - Enviar un correo
  // - Notificar a WhatsApp, etc.
  console.log("📩 Nuevo mensaje de contacto:", { nombre, email, mensaje });

  res.status(200).json({ success: true, message: "Mensaje recibido correctamente" });
};
