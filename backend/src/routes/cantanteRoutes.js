const express = require("express"); 
// Importa Express para usar su sistema de routing

const router = express.Router(); 
// Crea un router modular de Express para manejar las rutas de cantantes

const cantanteController = require("../controllers/cantanteController"); 
// Importa los controladores que contienen la lógica de cada endpoint

// --------------------
// Rutas de Cantantes
// --------------------

// GET /api/cantantes
// Obtiene todos los cantantes
router.get("/", cantanteController.getCantantes);

// GET /api/cantantes/:id
// Obtiene un cantante específico por su ID
router.get("/:id", cantanteController.getCantanteById);

// POST /api/cantantes
// Crea un nuevo cantante
// Se espera un body con { nombre, genero, descripcion, foto }
router.post("/", cantanteController.createCantante);

// PUT /api/cantantes/:id
// Actualiza los datos de un cantante existente por ID
router.put("/:id", cantanteController.updateCantante);

// DELETE /api/cantantes/:id
// Elimina un cantante por su ID
router.delete("/:id", cantanteController.deleteCantante);

// Exporta el router para usarlo en app.js
module.exports = router;
