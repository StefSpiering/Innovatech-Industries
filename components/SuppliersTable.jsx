import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Spinner, Text, useToast } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

const SuppliersTable = () => {
  const [suppliers, setSuppliers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchSuppliers = async () => {
      try {
        const { data, error } = await supabase
          .from('suppliers')
          .select('*');

        if (error) throw error;

        setSuppliers(data);
      } catch (error) {
        setError(error.message);
        toast({
          title: 'Error fetching suppliers.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchSuppliers();
  }, [toast]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Contact Info</Th>
            <Th>Address</Th>
            <Th>Phone Number</Th>
            <Th>Email</Th>
            <Th>Created At</Th>
          </Tr>
        </Thead>
        <Tbody>
          {suppliers.map((supplier) => (
            <Tr key={supplier.id}>
              <Td>{supplier.id}</Td>
              <Td>{supplier.name}</Td>
              <Td>{supplier.contact_info}</Td>
              <Td>{supplier.address}</Td>
              <Td>{supplier.phone_number}</Td>
              <Td>{supplier.email}</Td>
              <Td>{new Date(supplier.created_at).toLocaleString()}</Td>
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default SuppliersTable;
