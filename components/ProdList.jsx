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
} from '@chakra-ui/react';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';

import { FcPhone, FcTabletAndroid, FcHighPriority, FcManager, FcInfo } from 'react-icons/fc';

const Card = ({ heading, description, price, icon }) => {
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
          {icon}
        </Flex>
        <Box mt={2}>
          <Heading size="md">{heading}</Heading>
          <Text mt={1} fontSize={'sm'}>
            {description}
          </Text>
          <Text mt={1} fontSize={'sm'} fontWeight={'bold'}>
            ${price}
          </Text>
        </Box>
        <Button variant={'solid'} colorScheme={'blue'} size={'sm'}>
          Comprar
        </Button>
      </Stack>
    </Box>
  );
};

export default function GridListWith() {
  const [products, setProducts] = useState([]);

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

  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
      <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'190%'}>
            
            <Text as={'span'} color={'gray'}>
              
            </Text>
          </Heading>
        <Text color={'gray.600'} fontSize={{ base: 'sm', sm: 'lg' }}>
          Descubre nuestra gama de dispositivos electrónicos de última generación, diseñados para ofrecer un rendimiento superior y una experiencia de usuario inigualable.
        </Text>
      </Stack>

      <Container maxW={'5xl'} mt={20}>
        <Stack spacing={6}>
          <Flex flexWrap="wrap" gridGap={150} justify="center">
            {products.map((product, index) => (
              <Card
                key={product.id}
                heading={product.name}
                description={product.description || 'No description available'}
                price={product.price.toFixed(2)}
                icon={<Icon as={iconMap[product.name] || FcTabletAndroid} w={10} h={10} />}
              />
            ))}
          </Flex>
          {products.length > 0 && <Divider />}
        </Stack>
      </Container>
    </Box>
  );
}
