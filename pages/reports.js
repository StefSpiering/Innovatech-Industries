import { Box, Heading, Text, VStack } from '@chakra-ui/react';
import NextLink from 'next/link';

const Reports = () => {
  return (
    <Box p={4}>
      <Heading mb={4}>Consultas y Reportes</Heading>
      <Text mb={4}>Aquí podrás encontrar todos los reportes disponibles.</Text>
      <VStack spacing={4} align="stretch">
        {/* Enlaces a reportes específicos */}
        <NextLink href="/reports/sales" passHref>
          <Text as="a" color="blue.500" _hover={{ textDecoration: "underline" }}>
            Reporte de Ventas
          </Text>
        </NextLink>
        <NextLink href="/reports/inventory" passHref>
          <Text as="a" color="blue.500" _hover={{ textDecoration: "underline" }}>
            Reporte de Inventario
          </Text>
        </NextLink>
        {/* Agrega más enlaces si es necesario */}
      </VStack>
    </Box>
  );
};

export default Reports;
