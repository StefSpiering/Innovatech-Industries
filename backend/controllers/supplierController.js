const supplierModel = require('../models/supplierModel');

const getAllSuppliers = async (req, res) => {
  try {
    const suppliers = await supplierModel.getAllSuppliers();
    res.status(200).json(suppliers);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = {
  getAllSuppliers,
  // Implementar funciones adicionales para CRUD
};
