import { Box, Heading, Text, Button, Flex } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar'; // Asumiendo que tienes un componente Sidebar para el menú
import Header from '../components/Header';
import ConsultasTable from '../components/ConsultasTable'; // Importa tu componente de la tabla de consultas

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

          {/* Aquí se renderiza la tabla de consultas */}
          <ConsultasTable />
        </Box>
      </Flex>
    </Box>
  );
};

export default ConsultasReportes;
