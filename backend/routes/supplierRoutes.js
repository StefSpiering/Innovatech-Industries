const express = require('express');
const router = express.Router();
const { getAllSuppliers } = require('../controllers/supplierController');

router.get('/', getAllSuppliers);
// Agregar rutas adicionales para CRUD

module.exports = router;
