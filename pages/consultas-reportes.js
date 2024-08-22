import React, { useState } from 'react';
import { Box, Heading, Flex } from '@chakra-ui/react';

import ReportsTable from '../components/ReportsTable'; // Asegúrate de tener este componente
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import AddReportForm from '../components/AddReportForm';

const ManageReports = () => {
  const [selectedReport, setSelectedReport] = useState(null);

  // Manejar la selección de un reporte para edición
  const handleEditReport = (report) => {
    setSelectedReport(report);
  };

  // Limpiar la selección cuando se complete la edición o el agregado
  const handleFormSubmit = () => {
    setSelectedReport(null);
  };

  return (
    <Box p={6}>
      <Header />
      <Flex>
        <Box width="250px" bg="white" p={5} boxShadow="md">
          <Sidebar />
        </Box>

        <Box flex="1" p={5}>
          <Heading as="h1" mb={6} color="green">
            Consultas y Reportes
          </Heading>

          

          <Box mb={6}>
            {/* Pasar handleEditReport como prop */}
            <ReportsTable onEditReport={handleEditReport} />
          </Box>
          <Box mb={6}>
          <Heading as="h1" mb={6} color="gray" textAlign="center">
            Generar nuevo Reporte
          </Heading>

            {/* Pasar handleEditReport como prop */}
            <AddReportForm onEditReport={handleEditReport} />
          </Box>

          <Box>
            {/* Pasar el reporte seleccionado como prop */}
            
            
            
          </Box>
        </Box>
      </Flex>
    </Box>
  );
};

export default ManageReports;
