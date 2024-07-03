// Recursos Necesarios
const express = require("express")
const router = new express.Router() 
const invController = require("../controllers/invController")

// Ruta para construir el inventario por vista de clasificación
router.get("/type/:classificationId", invController.buildByClassificationId);

module.exports = router;