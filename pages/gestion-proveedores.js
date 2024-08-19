import React from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import AddSupplierForm from '../components/AddSupplierForm'; // Asegúrate de que la ruta sea correcta
import SuppliersTable from '../components/SuppliersTable';
import Sidebar from '../components/Sidebar'; // Asegurándote de que tienes un componente Sidebar para el menú
import Header from '../components/Header';

const ManageSuppliers = () => {
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
            Manage Suppliers
          </Heading>

          <Box mb={6}>
            <SuppliersTable />
          </Box>

          <Box>
            <AddSupplierForm />
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ManageSuppliers;
