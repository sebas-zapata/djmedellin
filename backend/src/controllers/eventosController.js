const Evento = require("../models/Evento");

// --------------------
// Controladores de Eventos
// --------------------

// GET /api/eventos
exports.getEventos = async (req, res) => {
  try {
    const eventos = await Evento.findAll();
    res.json(eventos);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener eventos" });
  }
};

// GET /api/eventos/:id
exports.getEventoById = async (req, res) => {
  try {
    const evento = await Evento.findByPk(req.params.id);
    if (!evento) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar evento" });
  }
};

// POST /api/eventos
exports.createEvento = async (req, res) => {
  try {
    const { nombre, fecha, lugar, descripcion } = req.body;
    const nuevoEvento = await Evento.create({ nombre, fecha, lugar, descripcion });
    res.status(201).json(nuevoEvento);
  } catch (error) {
    res.status(500).json({ error: "Error al crear evento" });
  }
};

// PUT /api/eventos/:id
exports.updateEvento = async (req, res) => {
  try {
    const { nombre, fecha, lugar, descripcion } = req.body;
    const evento = await Evento.findByPk(req.params.id);

    if (!evento) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }

    await evento.update({ nombre, fecha, lugar, descripcion }); // actualización segura
    res.json(evento);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar evento" });
  }
};

// DELETE /api/eventos/:id
exports.deleteEvento = async (req, res) => {
  try {
    const evento = await Evento.findByPk(req.params.id);

    if (!evento) {
      return res.status(404).json({ error: "Evento no encontrado" });
    }

    await evento.destroy(); // elimina solo el evento encontrado
    res.json({ message: "Evento eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar evento" });
  }
};