const express = require("express");
const { enviarMensaje } = require("../controllers/contactoController");

const router = express.Router();

// POST /api/contacto
router.post("/", enviarMensaje);

module.exports = router;
