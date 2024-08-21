import { useEffect, useState } from 'react';
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Box,
  Spinner,
  Text,
  useToast,
} from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

const ConsultasTable = () => {
  const [consultas, setConsultas] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchConsultas = async () => {
      try {
        const { data, error } = await supabase.from('consultas').select('*').order('created_at', { ascending: false });

        if (error) throw error;

        setConsultas(data);
      } catch (error) {
        setError(error.message);
        toast({
          title: 'Error al cargar las consultas.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchConsultas();
  }, [toast]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Tabla de Consultas Recibidas</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Nombre de Usuario</Th>
              <Th>Email</Th>
              <Th>Consulta</Th>
              <Th>Fecha de Creación</Th>
            </Tr>
          </Thead>
          <Tbody>
            {consultas.map((consulta) => (
              <Tr key={consulta.id}>
                <Td>{consulta.id}</Td>
                <Td>{consulta.nombre_usuario}</Td>
                <Td>{consulta.email}</Td>
                <Td>{consulta.consulta}</Td>
                <Td>{new Date(consulta.created_at).toLocaleString()}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ConsultasTable;
