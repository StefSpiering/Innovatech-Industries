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
  useColorModeValue,
  useToast, // Importa useToast
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
  const { addToCart } = useCart(); 
  const router = useRouter(); 
  const toast = useToast(); // Inicializa useToast

  useEffect(() => {
    async function fetchProducts() {
      const { data, error } = await supabase
        .from('products')
        .select('*');

      if (error) {
        console.error('Error fetching products:', error);
      } else {
        setProducts(data);
      }
    }

    fetchProducts();
  }, []);

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

        // Mostrar un toast de éxito
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

      // Mostrar un toast de error
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

      <Container maxW={'5xl'} mt={20}>
        <Stack spacing={6}>
          <Flex flexWrap="wrap" gridGap={150} justify="center">
            {products.map((product) => (
              <Card
                key={product.id}
                product={{ ...product, icon: <Icon as={iconMap[product.name] || FcTabletAndroid} w={10} h={10} /> }}
                onAddToCart={handleAddToCart} 
              />
            ))}
          </Flex>
          {products.length > 0 && <Divider />}
        </Stack>
      </Container>
    </Box>
  );
}
