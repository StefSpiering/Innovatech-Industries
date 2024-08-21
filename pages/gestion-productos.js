import React, { useState } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import AddProductForm from '../components/AddProductForm';
import ProductsTable from '../components/ProductsTable';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const ManageProduct = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  // Manejar la selección de un producto para edición
  const handleEditProduct = (product) => {
    setSelectedProduct(product);
  };

  // Limpiar la selección cuando se complete la edición o el agregado
  const handleFormSubmit = () => {
    setSelectedProduct(null);
  };

  return (
    <Box p={6}>
      <Header />
      <Flex>
        <Box width="250px" bg="white" p={5} boxShadow="md">
          <Sidebar />
        </Box>

        <Box flex="1" p={5}>
          <Heading as="h1" mb={6} color="green">
            Consultas y Reportes
          </Heading>

          <Heading as="h1" size="2xl" mb={6} textAlign="center">
            Manage Products
          </Heading>

          <Box mb={6}>
            {/* Pasar handleEditProduct como prop */}
            <ProductsTable onEditProduct={handleEditProduct} />
          </Box>

          <Box>
            {/* Pasar el producto seleccionado como prop */}
            <AddProductForm
              selectedProduct={selectedProduct}
              onFormSubmit={handleFormSubmit}
            />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ManageProduct;
