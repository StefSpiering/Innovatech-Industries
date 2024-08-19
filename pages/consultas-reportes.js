// pages/consultas-reportes.js
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar'; // Asumiendo que tienes un componente Sidebar para el menú
import Header from '../components/Header';

const ConsultasReportes = () => {
  return (
    <Box p={6}>
      <Header />
      <Heading as="h1" mb={6} color="green">
        Consultas y Reportes
      </Heading>

      <Flex>
        {/* Sidebar */}
        <Box width="250px" bg="white" p={5} boxShadow="md">
          <Sidebar />
        </Box>

        {/* Main content */}
        <Box flex="1" p={5}>
          <Text mb={4}>
            Aquí puedes generar consultas y reportes sobre los datos. Utiliza las herramientas a continuación para obtener la información que necesitas.
          </Text>

          <Button colorScheme="teal" mb={4}>
            Generar Reporte
          </Button>

          <Table variant="striped" colorScheme="teal">
            <Thead>
              <Tr>
                <Th>ID</Th>
                <Th>Nombre</Th>
                <Th>Descripción</Th>
                <Th>Fecha</Th>
                <Th>Acciones</Th>
              </Tr>
            </Thead>
            <Tbody>
              <Tr>
                <Td>1</Td>
                <Td>Reporte de Ventas</Td>
                <Td>Reporte mensual de ventas</Td>
                <Td>2024-08-01</Td>
                <Td>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Ver
                  </Button>
                  <Button colorScheme="red" size="sm">
                    Eliminar
                  </Button>
                </Td>
              </Tr>
              <Tr>
                <Td>2</Td>
                <Td>Reporte de Inventario</Td>
                <Td>Reporte de inventario actualizado</Td>
                <Td>2024-08-05</Td>
                <Td>
                  <Button colorScheme="blue" size="sm" mr={2}>
                    Ver
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

export default ConsultasReportes;
