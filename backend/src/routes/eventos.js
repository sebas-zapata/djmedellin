const express = require("express"); 
// Importa Express para usar su sistema de routing

const { getEventos, getEventoById, createEvento, updateEvento, deleteEvento } = require("../controllers/eventosController"); 
// Importa los controladores que contienen la lógica de cada endpoint

const router = express.Router(); 
// Crea un router modular de Express para manejar las rutas de eventos

// --------------------
// Rutas de eventos
// --------------------

// GET /api/eventos
router.get("/", getEventos);

// GET /api/eventos/:id
router.get("/:id", getEventoById);

// POST /api/eventos
router.post("/", createEvento);

// PUT /api/eventos/:id
router.put("/:id", updateEvento);

// DELETE /api/eventos/:id
router.delete("/:id", deleteEvento);

// Exporta el router para usarlo
module.exports = router;
