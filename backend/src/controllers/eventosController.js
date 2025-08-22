// Importa datos de eventos desde un archivo JSON
// Nota: Esto es útil para pruebas, pero en producción se recomienda usar la base de datos
const eventos = require("../data/eventos.json");

// --------------------
// Controladores de Eventos
// --------------------

// GET /api/eventos
// Devuelve todos los eventos
const getEventos = (req, res) => {
  res.json(eventos); // Retorna el array completo de eventos
};

// GET /api/eventos/:id
// Devuelve un evento específico por su ID
const getEventoById = (req, res) => {
  const { id } = req.params;
  // Convierte el ID a número y busca en el array
  const evento = eventos.find(e => e.id === parseInt(id));

  if (evento) {
    res.json(evento); // Retorna el evento encontrado
  } else {
    res.status(404).json({ message: "Evento no encontrado" }); // Error si no existe
  }
};

module.exports = { getEventos, getEventoById }; // Exporta los controladores
