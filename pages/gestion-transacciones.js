import { useEffect, useState } from 'react';
import { Box, Heading, Text, Table, Thead, Tbody, Tr, Th, Td, Button, Flex, Spinner, useToast } from '@chakra-ui/react';
import Sidebar from '../components/Sidebar'; 
import Header from '../components/Header';
import supabase from '../lib/supabaseClient';

const GestionTransacciones = () => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);
  const toast = useToast();

  useEffect(() => {
    const fetchTransactions = async () => {
      try {
        const { data, error } = await supabase
          .from('transactions')
          .select('*'); 

        if (error) throw error;

        setTransactions(data);
      } catch (error) {
        toast({
          title: 'Error al cargar transacciones.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchTransactions();
  }, [toast]);

  if (loading) return <Spinner size="xl" />;

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
                <Th>ID</Th> {/* ID de la transacción */}
                <Th>Fecha</Th>
                <Th>Descripción</Th>
                <Th>Importe</Th>
                
              </Tr>
            </Thead>
            <Tbody>
              {transactions.map((transaction) => (
                <Tr key={transaction.id}>
                  <Td>{transaction.id}</Td> {/* ID de la transacción */}
                  <Td>{new Date(transaction.transaction_date).toLocaleString()}</Td>
                  <Td>{transaction.description}</Td>
                  <Td>${transaction.amount.toFixed(2)}</Td>
                  
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Flex>
    </Box>
  );
};

export default GestionTransacciones;
