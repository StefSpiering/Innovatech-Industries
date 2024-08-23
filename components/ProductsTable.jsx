import { useEffect, useState } from 'react';
import { Table, Thead, Tbody, Tr, Th, Td, Box, Spinner, Text, Button, useToast, Input } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

const ProductsTable = ({ onEditProduct }) => {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');
  const toast = useToast();

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const { data, error } = await supabase
          .from('products')
          .select('id, name, description, price, cantidades, suppliers(name)'); // Se incluye la columna 'cantidades'

        if (error) throw error;

        setProducts(data);
        setFilteredProducts(data); // Inicialmente, los productos filtrados son todos los productos
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

  useEffect(() => {
    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      (product.suppliers?.name.toLowerCase().includes(searchTerm.toLowerCase()))
    );
    setFilteredProducts(filtered);
  }, [searchTerm, products]);

  if (loading) return <Spinner size="xl" />;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Box p={4}>
      <Input
        placeholder="Buscar productos..."
        mb={4}
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Table variant="simple">
        <Thead>
          <Tr>
            <Th>ID</Th>
            <Th>Name</Th>
            <Th>Description</Th>
            <Th>Price</Th>
            <Th>Supplier</Th>
            <Th>Quantities</Th> {/* Nueva columna para cantidades */}
            <Th>Actions</Th> {/* Nueva columna para acciones */}
          </Tr>
        </Thead>
        <Tbody>
          {filteredProducts.map((product) => (
            <Tr key={product.id}>
              <Td>{product.id}</Td>
              <Td>{product.name}</Td>
              <Td>{product.description}</Td>
              <Td>${product.price}</Td>
              <Td>{product.suppliers?.name}</Td> {/* Ajusta según tu estructura */}
              <Td>{product.cantidades}</Td> {/* Mostrar las cantidades */}
              <Td>
                <Button colorScheme="blue" onClick={() => onEditProduct(product)}>
                  Editar
                </Button>
              </Td> {/* Botón de edición */}
            </Tr>
          ))}
        </Tbody>
      </Table>
    </Box>
  );
};

export default ProductsTable;
