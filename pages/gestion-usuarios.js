'use client';

import React, { useState } from 'react';
import { Box, Heading, Text, Stack, Flex, Input } from '@chakra-ui/react';
import TablaUsuarios from '../components/TablaUsuarios';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';

const Usuarios = () => {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <Box p={6}>
      <Header />
      <Flex>
        <Box width="250px" bg="white" p={5} boxShadow="md">
          <Sidebar />
        </Box>

        <Box flex="1" p={5}>
          <Heading as="h1" size="xl" mb={6}>
            Gestión de Usuarios
          </Heading>

          <Stack spacing={4} mb={8}>
            <Text fontSize="lg">
              En esta sección, puedes ver la lista de usuarios registrados en la plataforma.
            </Text>
            <Text fontSize="md" color="gray.600">
              Esta tabla muestra información básica como el correo electrónico, nombre, apellido y la fecha en la que se registró cada usuario.
            </Text>
          </Stack>

          <Input
            placeholder="Buscar por nombre o apellido"
            mb={6}
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />

          <TablaUsuarios searchTerm={searchTerm} />

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
