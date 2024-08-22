import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Spinner, Text, useToast, TableContainer, TableCaption, Button, Checkbox, Flex } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient'; // Asegúrate de que esta ruta es correcta

const ReportsTable = () => {
  const [reports, setReports] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [updatedReports, setUpdatedReports] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchReports = async () => {
      try {
        const { data, error } = await supabase
          .from('reports')
          .select('id, name, description, date, excel_file_url');

        if (error) throw error;

        setReports(data);
      } catch (error) {
        setError(error.message);
        toast({
          title: 'Error fetching reports.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchReports();
  }, [toast]);

  const handleCheckboxChange = (reportId, checked) => {
    setReports(prevReports =>
      prevReports.map(report =>
        report.id === reportId
          ? { ...report, is_completed: checked }
          : report
      )
    );

    setUpdatedReports(prevUpdatedReports => {
      const existingReport = prevUpdatedReports.find(
        report => report.id === reportId
      );
      if (existingReport) {
        return prevUpdatedReports.map(report =>
          report.id === reportId
            ? { ...report, is_completed: checked }
            : report
        );
      } else {
        return [...prevUpdatedReports, { id: reportId, is_completed: checked }];
      }
    });
  };

  const handleSaveChanges = async () => {
    try {
      // Filter out entries with undefined values
      const filteredReports = updatedReports.filter(report => report.id !== undefined);

      // Update existing records
      const updatePromises = filteredReports.map(report =>
        supabase
          .from('reports')
          .update({ is_completed: report.is_completed })
          .match({ id: report.id })
      );
      const updateResults = await Promise.all(updatePromises);

      // Handle any errors in update results
      for (const result of updateResults) {
        if (result.error) throw result.error;
      }

      toast({
        title: 'Changes saved.',
        description: 'Report details have been updated successfully.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      toast({
        title: 'Error saving changes.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Gestionar reportes</TableCaption>
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
            {reports.map((report) => (
              <Tr key={report.id}>
                <Td>{report.id}</Td>
                <Td>{report.name}</Td>
                <Td>{report.description}</Td>
                <Td>{new Date(report.date).toLocaleDateString()}</Td>
                <Td>
                  <Checkbox
                    isChecked={report.is_completed || false}
                    onChange={(e) => handleCheckboxChange(report.id, e.target.checked)}
                  />
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      <Box mt={4}>
        <Button colorScheme="green" onClick={handleSaveChanges}>
          Guardar Cambios
        </Button>
      </Box>
    </Box>
  );
};

export default ReportsTable;
