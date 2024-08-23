'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Image,
  Stack,
  Text,
  Input,
  useColorModeValue,
  useToast,
  SimpleGrid,
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import { useCart } from '../context/CartContext'; 
import supabase from '../lib/supabaseClient';

const Card = ({ product, onAddToCart }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '350px' }}  // Ajusta el ancho de las tarjetas aquí
      w={'full'}
      borderWidth="2px"
      borderRadius="lg"
      overflow="hidden"
      p={5}
      bg={useColorModeValue('white', 'gray.800')}
      boxShadow='md'
      transition='all 0.3s ease'
      _hover={{ boxShadow: 'lg', transform: 'scale(1.02)' }}
    >
      <Image
        src={product.image_url || 'https://via.placeholder.com/300'}
        alt={product.name}
        borderRadius="lg"
        mb={4}
      />
      <Stack align={'start'} spacing={4}>
        <Box mt={2}>
          <Heading size="md">{product.name}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {product.description || 'No description available'}
          </Text>
          <Text mt={1} fontSize={'sm'} fontWeight={'bold'}>
            ${product.price.toFixed(2)}
          </Text>
        </Box>
        <Button variant={'solid'} colorScheme={'green'} size={'sm'} onClick={() => onAddToCart(product)}>
          Añadir
        </Button>
      </Stack>
    </Box>
  );
};

export default function ProdList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  const { addToCart } = useCart(); 
  const router = useRouter(); 
  const toast = useToast(); 

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data);
        setFilteredProducts(data);
      }
    }

    fetchProducts();
  }, []);

  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );

    setFilteredProducts(filtered);
  };

  const handleAddToCart = async (product) => {
    try {
      const { data, error: userError } = await supabase.auth.getUser();
  
      if (userError) {
        console.error("Error fetching user:", userError);
        throw userError;
      }
  
      const user = data?.user;
  
      if (!user || !user.id) {
        throw new Error('User ID is not available.');
      }
  
      const { data: insertData, error } = await supabase
        .from('cart_items')
        .insert([{ 
          user_id: user.id,
          product_id: product.id,
          quantity: 1
        }]);
  
      if (error) {
        console.error('Error adding product to cart:', error.message); 
        throw error;
      } else {
        toast({
          title: "Producto añadido.",
          description: `El producto ${product.name} se ha añadido al carrito.`,
          status: "success",
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Failed to add to cart:', error.message); 

      toast({
        title: "Error al añadir al carrito.",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'8xl'} textAlign={'center'}>  {/* Ajusta maxW aquí */}
        <Heading
          fontWeight={600}
          fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
          lineHeight={'190%'}>
          <Text as={'span'} color={'gray'}>
            Nuestros Productos
          </Text>
        </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Descubre nuestra gama de dispositivos electrónicos de última generación, diseñados para ofrecer un rendimiento superior y una experiencia de usuario inigualable.
        </Text>
      </Stack>

      <Container maxW={'8xl'} mt={10}>  {/* Ajusta el contenedor */}
        <Input
          placeholder="Buscar productos por nombre..."
          value={searchTerm}
          onChange={handleSearchChange}
          mb={6}
        />
        <Stack spacing={6}>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={4}>  {/* Reduce el spacing */}
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                product={product}
                onAddToCart={handleAddToCart} 
              />
            ))}
          </SimpleGrid>
          {filteredProducts.length > 0 && <Divider />}
        </Stack>
      </Container>
    </Box>
  );
}
