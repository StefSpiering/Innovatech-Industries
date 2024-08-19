const productModel = require('../models/productModel');

const getAllProducts = async (req, res) => {
  try {
    const products = await productModel.getAllProducts();
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllProducts,
  // Implementar funciones adicionales para CRUD
};
