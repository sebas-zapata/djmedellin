const express = require("express");
const router = express.Router();
const cantanteController = require("../controllers/cantanteController");

router.get("/", cantanteController.getCantantes);
router.get("/:id", cantanteController.getCantanteById);
router.post("/", cantanteController.createCantante);
router.put("/:id", cantanteController.updateCantante);
router.delete("/:id", cantanteController.deleteCantante);

module.exports = router;
