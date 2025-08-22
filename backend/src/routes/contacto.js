const express = require("express"); 
// Importa Express para usar su sistema de routing

const { enviarMensaje } = require("../controllers/contactoController"); 
// Importa el controlador que maneja la lógica de envío de mensajes

const router = express.Router(); 
// Crea un router modular de Express para manejar las rutas de contacto

// --------------------
// Rutas de contacto
// --------------------

// POST /api/contacto
// Endpoint para enviar un mensaje de contacto
// El cuerpo de la solicitud debe incluir: { nombre, email, mensaje }
router.post("/", enviarMensaje);

// Exporta el router para usarlo en el archivo principal app.js
module.exports = router;
