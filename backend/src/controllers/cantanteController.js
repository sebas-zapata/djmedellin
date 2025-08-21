const Cantante = require("../models/Cantante");

// Obtener todos los cantantes
exports.getCantantes = async (req, res) => {
  try {
    const cantantes = await Cantante.findAll();
    res.json(cantantes);
  } catch (error) {
    res.status(500).json({ error: "Error al obtener cantantes" });
  }
};

// Obtener un cantante por ID
exports.getCantanteById = async (req, res) => {
  try {
    const cantante = await Cantante.findByPk(req.params.id);
    if (!cantante) {
      return res.status(404).json({ error: "Cantante no encontrado" });
    }
    res.json(cantante);
  } catch (error) {
    res.status(500).json({ error: "Error al buscar cantante" });
  }
};

// Crear un nuevo cantante
exports.createCantante = async (req, res) => {
  try {
    const { nombre, genero, descripcion, foto } = req.body;
    const nuevoCantante = await Cantante.create({ nombre, genero, descripcion, foto });
    res.status(201).json(nuevoCantante);
  } catch (error) {
    res.status(500).json({ error: "Error al crear cantante" });
  }
};

// Actualizar un cantante
exports.updateCantante = async (req, res) => {
  try {
    const { nombre, genero, descripcion, foto } = req.body;
    const cantante = await Cantante.findByPk(req.params.id);

    if (!cantante) {
      return res.status(404).json({ error: "Cantante no encontrado" });
    }

    await cantante.update({ nombre, genero, descripcion, foto });
    res.json(cantante);
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar cantante" });
  }
};

// Eliminar un cantante
exports.deleteCantante = async (req, res) => {
  try {
    const cantante = await Cantante.findByPk(req.params.id);

    if (!cantante) {
      return res.status(404).json({ error: "Cantante no encontrado" });
    }

    await cantante.destroy();
    res.json({ message: "Cantante eliminado correctamente" });
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar cantante" });
  }
};
