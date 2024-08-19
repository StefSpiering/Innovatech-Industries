import React from 'react';
import { Box, Container, Heading, Flex } from '@chakra-ui/react';
import AddProductForm from '../components/AddProductForm'; // Asegúrate de que la ruta sea correcta
import ProductsTable from '../components/ProductsTable';
import Sidebar from '../components/Sidebar'; // Asumiendo que tienes un componente Sidebar para el menú
import Header from '../components/Header';

const ManageProduct = () => {
  return (
    <Box p={6}>
      <Header />
      <Flex>
        {/* Sidebar */}
        <Box width="250px" bg="white" p={5} boxShadow="md">
          <Sidebar />
        </Box>

        {/* Main content */}
        <Box flex="1" p={5}>
          <Heading as="h1" mb={6} color="green">
            Consultas y Reportes
          </Heading>

          <Heading as="h1" size="2xl" mb={6} textAlign="center">
            Manage Product
          </Heading>

          <Box mb={6}>
            <ProductsTable />
          </Box>

          <Box>
            <AddProductForm />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ManageProduct;
