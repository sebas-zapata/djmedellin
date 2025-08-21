const express = require("express");
const { getEventos, getEventoById } = require("../controllers/eventosController");

const router = express.Router();

router.get("/", getEventos);
router.get("/:id", getEventoById);

module.exports = router;
