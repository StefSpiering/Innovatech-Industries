'use client';

import { Box } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import FAQ from '../components/gestion-ayuda'; // Asegúrate de que la ruta es correcta

const GestionAyuda = () => {
  return (
    <Box p={6}>
      <Header />
      <Box display="flex">
        {/* Sidebar */}
        <Box width="250px" bg="white" p={5} boxShadow="md">
          <Sidebar />
        </Box>

        {/* Main content */}
        <Box flex="1" p={5}>
          <FAQ />
        </Box>
      </Box>
    </Box>
  );
};

export default GestionAyuda;
