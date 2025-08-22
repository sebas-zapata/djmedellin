const express = require("express"); 
// Importa Express para usar su sistema de routing

const { getEventos, getEventoById } = require("../controllers/eventosController"); 
// Importa los controladores que contienen la lógica de cada endpoint

const router = express.Router(); 
// Crea un router modular de Express para manejar las rutas de eventos

// --------------------
// Rutas de eventos
// --------------------

// GET /api/eventos
// Retorna todos los eventos de la base de datos
router.get("/", getEventos);

// GET /api/eventos/:id
// Retorna un evento específico según su ID
router.get("/:id", getEventoById);

// Exporta el router para usarlo
module.exports = router;
