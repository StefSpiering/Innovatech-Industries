'use client';

import {
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  Icon,
  Stack,
  Text,
  Input,
  useColorModeValue,
  useToast, 
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router'; 
import { useCart } from '../context/CartContext'; 
import supabase from '../lib/supabaseClient';

import { FcPhone, FcTabletAndroid, FcHighPriority, FcManager, FcInfo } from 'react-icons/fc';

const Card = ({ product, onAddToCart }) => {
  return (
    <Box
      maxW={{ base: 'full', md: '420px' }}
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
      <Stack align={'start'} spacing={4}>
        <Flex
          w={16}
          h={16}
          align={'center'}
          justify={'center'}
          color={'white'}
          rounded={'full'}
          bg={useColorModeValue('gray.100', 'gray.700')}
        >
          {product.icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{product.name}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {product.description || 'No description available'}
          </Text>
          <Text mt={1} fontSize={'sm'} fontWeight={'bold'}>
            ${product.price.toFixed(2)}
          </Text>
        </Box>
        <Button variant={'solid'} colorScheme={'blue'} size={'sm'} onClick={() => onAddToCart(product)}>
          Añadir
        </Button>
      </Stack>
    </Box>
  );
};

export default function ProdList() {
  const [products, setProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]); // Estado para productos filtrados
  const [searchTerm, setSearchTerm] = useState(''); // Estado para el término de búsqueda
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
        setFilteredProducts(data); // Inicialmente mostrar todos los productos
      }
    }

    fetchProducts();
  }, []);

  // Manejar cambios en el campo de búsqueda
  const handleSearchChange = (e) => {
    const value = e.target.value.toLowerCase();
    setSearchTerm(value);

    const filtered = products.filter((product) =>
      product.name.toLowerCase().includes(value)
    );

    setFilteredProducts(filtered);
  };

  const iconMap = {
    'Smartphone': FcPhone,
    'Tablet': FcTabletAndroid,
    'Accessory': FcHighPriority,
    'Quality': FcManager,
    'Support': FcInfo,
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
  
      console.log("User ID:", user.id);
      console.log("Product ID:", product.id);
  
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
        console.log('Product added to cart in database:', insertData); 

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
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
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

      <Container maxW={'5xl'} mt={10}>
        <Input
          placeholder="Buscar productos por nombre..."
          value={searchTerm}
          onChange={handleSearchChange}
          mb={6}
        />
        <Stack spacing={6}>
          <Flex flexWrap="wrap" gridGap={150} justify="center">
            {filteredProducts.map((product) => (
              <Card
                key={product.id}
                product={{ ...product, icon: <Icon as={iconMap[product.name] || FcTabletAndroid} w={10} h={10} /> }}
                onAddToCart={handleAddToCart} 
              />
            ))}
          </Flex>
          {filteredProducts.length > 0 && <Divider />}
        </Stack>
      </Container>
    </Box>
  );
}
