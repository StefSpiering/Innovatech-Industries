const express = require('express');
const router = express.Router();
const { getAllProducts } = require('../controllers/productController');

const productRoutes = (supabase) => {
  router.get('/', getAllProducts);
  // Agregar rutas adicionales para CRUD

  return router;
};

module.exports = productRoutes;
