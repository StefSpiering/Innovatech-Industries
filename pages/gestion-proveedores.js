import React, { useState } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';
import AddSupplierForm from '../components/AddSupplierForm';

import SuppliersTable from '../components/SuppliersTable';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const ManageSuppliers = () => {
  const [selectedSupplier, setSelectedSupplier] = useState(null);

  // Manejar la selección de un proveedor para edición
  const handleEditSupplier = (supplier) => {
    setSelectedSupplier(supplier);
  };

  // Limpiar la selección cuando se complete la edición o el agregado
  const handleFormSubmit = () => {
    setSelectedSupplier(null);
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
            Manage Suppliers
          </Heading>

          <Box mb={6}>
            {/* Pasar handleEditSupplier como prop */}
            <SuppliersTable onEditSupplier={handleEditSupplier} />
          </Box>

          <Box>
            {/* Pasar el proveedor seleccionado como prop */}
            <AddSupplierForm
              selectedSupplier={selectedSupplier}
              onFormSubmit={handleFormSubmit}
            />
          </Box>
        
        </Box>
      </Flex>
    </Box>
  );
};

export default ManageSuppliers;
