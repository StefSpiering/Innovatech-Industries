import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Spinner, Text, useToast, TableContainer, TableCaption } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient'; // Asegúrate de que esta ruta es correcta

const ProductsTable = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const toast = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        // Ajusta la consulta según la estructura de tu base de datos
        const { data, error } = await supabase
          .from('products')
          .select(`
            id,
            name,
            description,
            price,
            supplier:suppliers (name)  // Asegúrate de que esta relación es válida en tu esquema
          `);

        if (error) throw error;

        setProducts(data);
      } catch (error) {
        setError(error.message);
        toast({
          title: 'Error fetching products.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [toast]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <TableContainer>
        <Table variant='striped' colorScheme='teal'>
          <TableCaption>Products List</TableCaption>
          <Thead>
            <Tr>
              <Th>ID</Th>
              <Th>Name</Th>
              <Th>Description</Th>
              <Th isNumeric>Price</Th>
              <Th>Supplier</Th>
            </Tr>
          </Thead>
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.id}</Td>
                <Td>{product.name}</Td>
                <Td>{product.description}</Td>
                <Td isNumeric>{product.price}</Td>
                <Td>{product.supplier ? product.supplier.name : 'No supplier'}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default ProductsTable;

