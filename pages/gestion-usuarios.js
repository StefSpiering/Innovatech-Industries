'use client';

import React from 'react';
import { Box, Heading, Text, Stack, Flex } from '@chakra-ui/react';
import TablaUsuarios from '../components/TablaUsuarios'; // Asegúrate de que la ruta es correcta
import Sidebar from '../components/Sidebar'; // Asegurándote de que tienes un componente Sidebar para el menú
import Header from '../components/Header';

const Usuarios = () => {
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
          {/* Título principal */}
          <Heading as="h1" size="xl" mb={6}>
            Gestión de Usuarios
          </Heading>

          {/* Información adicional */}
          <Stack spacing={4} mb={8}>
            <Text fontSize="lg">
              En esta sección, puedes ver la lista de usuarios registrados en la plataforma.
            </Text>
            <Text fontSize="md" color="gray.600">
              Esta tabla muestra información  como el correo electrónico, nombre, apellido y la fecha en la que se registró cada usuario.
            </Text>
          </Stack>

          {/* Tabla de usuarios */}
          <TablaUsuarios />

          {/* Sección de notas o instrucciones adicionales */}
          <Box mt={10}>
            <Heading as="h2" size="md" mb={4}>
              Notas importantes:
            </Heading>
            <Text fontSize="sm" color="gray.500">
              Recuerda que puedes actualizar la información de los usuarios o gestionar sus permisos desde esta sección.
            </Text>
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default Usuarios;
