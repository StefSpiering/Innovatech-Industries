import { useState, useEffect } from 'react';
import {
  Container,
  Heading,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Table,
  Tbody,
  Tr,
  Td,
} from '@chakra-ui/react';

const ProductMaintenance = () => {
  const [products, setProducts] = useState([]);
  const [name, setName] = useState('');
  const [price, setPrice] = useState('');

  useEffect(() => {
    // Aquí podrías realizar una llamada a una API para obtener los productos existentes
    // Supongamos que los productos se obtienen de una API o una base de datos
    const fetchProducts = async () => {
      try {
        // Lógica para obtener los productos
        const response = await fetch('/api/products');
        if (response.ok) {
          const data = await response.json();
          setProducts(data);
        } else {
          throw new Error('Error fetching products');
        }
      } catch (error) {
        console.error('Error fetching products:', error);
      }
    };

    fetchProducts();
  }, []);

  const handleAddProduct = async () => {
    try {
      // Lógica para agregar un nuevo producto
      const response = await fetch('/api/products', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, price }),
      });

      if (response.ok) {
        // Actualizar la lista de productos después de agregar uno nuevo
        const newProduct = await response.json();
        setProducts([...products, newProduct]);
        setName('');
        setPrice('');
      } else {
        throw new Error('Error adding product');
      }
    } catch (error) {
      console.error('Error adding product:', error);
    }
  };

  return (
    <Container maxW="lg" py={12}>
      <Box bg="white" p={8} boxShadow="lg" borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>
          Mantenimiento de Productos
        </Heading>
        <FormControl id="name" mb={4}>
          <FormLabel>Nombre del Producto</FormLabel>
          <Input type="text" value={name} onChange={(e) => setName(e.target.value)} />
        </FormControl>
        <FormControl id="price" mb={6}>
          <FormLabel>Precio</FormLabel>
          <Input type="number" value={price} onChange={(e) => setPrice(e.target.value)} />
        </FormControl>
        <Button colorScheme="teal" onClick={handleAddProduct}>
          Agregar Producto
        </Button>

        <Heading as="h3" size="md" mt={8} mb={4}>
          Listado de Productos
        </Heading>
        <Table variant="simple">
          <Tbody>
            {products.map((product) => (
              <Tr key={product.id}>
                <Td>{product.name}</Td>
                <Td>${product.price}</Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </Box>
    </Container>
  );
};

export default ProductMaintenance;
