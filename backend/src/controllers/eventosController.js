const eventos = require("../data/eventos.json");

const getEventos = (req, res) => {
  res.json(eventos);
};

const getEventoById = (req, res) => {
  const { id } = req.params;
  const evento = eventos.find(e => e.id === parseInt(id));
  if (evento) {
    res.json(evento);
  } else {
    res.status(404).json({ message: "Evento no encontrado" });
  }
};

module.exports = { getEventos, getEventoById };
