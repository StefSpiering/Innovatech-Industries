// pages/mantenimiento-tablas.js
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar'; // Asumiendo que tienes un componente Sidebar para el menú
import Header from '../components/Header';

const MantenimientoTablas = () => {
  return (
    <Box p={6}>
      <Header />
      <Heading as="h1" mb={6} color="green">
        Mantenimiento de Tablas
      </Heading>

      <Flex>
        {/* Sidebar */}
        <Box width="250px" bg="white" p={5} boxShadow="md">
          <Sidebar />
        </Box>

        {/* Main content */}
        <Box flex="1" p={5}>
          <Text mb={4}>
            Aquí puedes gestionar el mantenimiento de tus tablas. Realiza operaciones como crear, actualizar o eliminar registros.
          </Text>

          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Nombre</Th>
                <Th>Descripción</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Ejemplo Tabla 1</Td>
                <Td>Descripción de ejemplo 1</Td>
                <Td>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Editar
                  </Button>
                  <Button colorScheme="red" size="sm">
                    Eliminar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Ejemplo Tabla 2</Td>
                <Td>Descripción de ejemplo 2</Td>
                <Td>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Editar
                  </Button>
                  <Button colorScheme="red" size="sm">
                    Eliminar
                  </Button>
                </Td>
              </Tr>
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default MantenimientoTablas;
