import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Spinner, Text, useToast, TableContainer, TableCaption } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient'; // Asegúrate de que esta ruta es correcta

const PurchaseOrdersTable = () => {
  const [purchaseOrders, setPurchaseOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchPurchaseOrders = async () => {
      try {
        const { data, error } = await supabase
          .from('purchaseorders') // Nombre de la tabla
          .select('supplier_id, total_amount');

        if (error) throw error;

        setPurchaseOrders(data);
      } catch (error) {
        setError(error.message);
        toast({
          title: 'Error fetching purchase orders.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchPurchaseOrders();
  }, [toast]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <TableContainer>
        <Table variant="striped" colorScheme="teal">
          <TableCaption>Purchase Orders</TableCaption>
          <Thead>
            <Tr>
              <Th>Supplier ID</Th>
              <Th isNumeric>Total Amount</Th>
            </Tr>
          </Thead>
          <Tbody>
            {purchaseOrders.map((order, index) => (
              <Tr key={index}>
                <Td>{order.supplier_id}</Td>
                <Td isNumeric>{order.total_amount}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default PurchaseOrdersTable;
