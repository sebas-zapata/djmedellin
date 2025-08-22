const Cantante = require("../models/Cantante"); 
// Importa el modelo de Cantante para interactuar con la base de datos

// --------------------
// Controladores de Cantantes
// --------------------

// GET /api/cantantes
// Obtiene todos los cantantes
exports.getCantantes = async (req, res) => {
  try {
    const cantantes = await Cantante.findAll(); // Trae todos los registros
    res.json(cantantes); // Responde con la lista de cantantes
  } catch (error) {
    res.status(500).json({ error: "Error al obtener cantantes" }); // Error interno del servidor
  }
};

// GET /api/cantantes/:id
// Obtiene un cantante por su ID
exports.getCantanteById = async (req, res) => {
  try {
    const cantante = await Cantante.findByPk(req.params.id); // Busca por clave primaria
    if (!cantante) {
      return res.status(404).json({ error: "Cantante no encontrado" }); // Manejo de error si no existe
    }
    res.json(cantante); // Devuelve el cantante encontrado
  } catch (error) {
    res.status(500).json({ error: "Error al buscar cantante" });
  }
};

// POST /api/cantantes
// Crea un nuevo cantante
exports.createCantante = async (req, res) => {
  try {
    const { nombre, genero, descripcion, foto } = req.body; // Extrae datos del body
    const nuevoCantante = await Cantante.create({ nombre, genero, descripcion, foto }); // Inserta en DB
    res.status(201).json(nuevoCantante); // Responde con el cantante creado
  } catch (error) {
    res.status(500).json({ error: "Error al crear cantante" });
  }
};

// PUT /api/cantantes/:id
// Actualiza un cantante existente
exports.updateCantante = async (req, res) => {
  try {
    const { nombre, genero, descripcion, foto } = req.body;
    const cantante = await Cantante.findByPk(req.params.id); // Busca el cantante por ID

    if (!cantante) {
      return res.status(404).json({ error: "Cantante no encontrado" }); // Manejo si no existe
    }

    await cantante.update({ nombre, genero, descripcion, foto }); // Actualiza los campos
    res.json(cantante); // Devuelve el cantante actualizado
  } catch (error) {
    res.status(500).json({ error: "Error al actualizar cantante" });
  }
};

// DELETE /api/cantantes/:id
// Elimina un cantante por ID
exports.deleteCantante = async (req, res) => {
  try {
    const cantante = await Cantante.findByPk(req.params.id); // Busca el cantante

    if (!cantante) {
      return res.status(404).json({ error: "Cantante no encontrado" }); // Manejo si no existe
    }

    await cantante.destroy(); // Elimina el registro
    res.json({ message: "Cantante eliminado correctamente" }); // Confirma eliminación
  } catch (error) {
    res.status(500).json({ error: "Error al eliminar cantante" });
  }
};
