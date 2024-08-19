// pages/gestion-transacciones.js
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar'; // Asumiendo que tienes un componente Sidebar para el menú
import Header from '../components/Header';

const GestionTransacciones = () => {
  return (
    <Box p={6}>
      <Header />
      <Heading as="h1" mb={6} color="green">
        Gestión de Transacciones
      </Heading>

      <Flex>
        {/* Sidebar */}
        <Box width="250px" bg="white" p={5} boxShadow="md">
          <Sidebar />
        </Box>

        {/* Main content */}
        <Box flex="1" p={5}>
          <Text mb={4}>
            Aquí puedes gestionar las transacciones. Realiza operaciones como visualizar, agregar, editar o eliminar transacciones.
          </Text>

          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Fecha</Th>
                <Th>Descripción</Th>
                <Th>Importe</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>2024-08-15</Td>
                <Td>Compra en tienda A</Td>
                <Td>$150.00</Td>
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
                <Td>2024-08-16</Td>
                <Td>Compra en tienda B</Td>
                <Td>$200.00</Td>
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

export default GestionTransacciones;
