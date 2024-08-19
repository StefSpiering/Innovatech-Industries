'use client';

import { Box, Flex, useColorModeValue } from '@chakra-ui/react';
import Header from '../components/Header.jsx'; // Verifica que esta ruta sea correcta y la extensión sea .jsx
import Sidebar from '../components/Sidebar.jsx'; // Verifica que esta ruta sea correcta y la extensión sea .jsx
import Consulta from '../components/Consulta.jsx'; // Verifica que esta ruta sea correcta y la extensión sea .jsx

export default function SeccionConsultas() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex>
        <Sidebar />
        <Box
          flex="1"
          bg={useColorModeValue('gray.50', 'gray.800')}
          p={6}
        >
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
          >
            <Box mb={4}>
              <h1>Sección para Consultas</h1>
              <p>Realiza tus consultas personalizadas en esta sección.</p>
            </Box>
            <Consulta />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
