import React from 'react';
import { Box, Container, Heading, Flex } from '@chakra-ui/react';

import PurchaseOrdersTable from '../components/PurchaseOrdersTable'; // Tabla para mostrar órdenes de compra
import Sidebar from '../components/Sidebar'; // Asumiendo que tienes un componente Sidebar para el menú
import Header from '../components/Header';
import OrderDetailsTable from '../components/OrderDetailsTable';

const ManagePurchaseOrders = () => {
  return (
    <Box p={6}>
      <Header />
      <Flex>
        
        <Box width="250px" >
          <Sidebar />
        </Box>

        {/* Main content */}
        <Box flex="1" p={5}>
          <Heading as="h1" mb={6} color="blue.600">
            
          </Heading>

          <Heading as="h1" size="2xl" mb={6} textAlign="center">
            Manage Purchase Orders
          </Heading>

          <Box mb={6}>
            <PurchaseOrdersTable /> 
            {/* Tabla que muestra las órdenes de compra */}
            <OrderDetailsTable />
          </Box>

          <Box>
           
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ManagePurchaseOrders;
