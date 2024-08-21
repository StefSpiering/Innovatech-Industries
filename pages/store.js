'use client';

import React from 'react';
import {
  Avatar,
  Box,
  Container,
  Flex,
  Heading,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
} from '@chakra-ui/react';
import HeaderStore from '../components/HeaderStore'; // Asegúrate de que la ruta sea correcta
import Carousel from '../components/Carousel';
import HeroStore from '../components/HeroStore';
import ProdList from '../components/ProdList';
import Footer from '../components/Footer';


const testimonials = [
  {
    name: 'Brandon P.',
    role: 'Chief Marketing Officer',
    content:
      'Innovatech Industries ha revolucionado la manera en que gestionamos nuestras operaciones. La eficiencia y precisión que ofrecen sus soluciones tecnológicas son incomparables. ¡Altamente recomendados!',
    avatar:
      'https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Krysta B.',
    role: 'Entrepreneur',
    content:
      "Desde que implementamos las soluciones de Innovatech Industries, hemos visto un crecimiento significativo en nuestra productividad. Su atención al cliente es excepcional y siempre están disponibles para resolver cualquier duda.",
    avatar:
      'https://images.unsplash.com/photo-1598550874175-4d0ef436c909?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Darcy L.',
    role: 'Movie Star',
    content:
      "Las soluciones de Innovatech Industries no solo son innovadoras sino también extremadamente eficientes. Han transformado nuestro flujo de trabajo y nos han ayudado a alcanzar nuevos niveles de éxito.",
    avatar:
      'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=334&q=80',
  },
  {
    name: 'Daniel T.',
    role: 'Musician',
    content:
      'Estoy impresionado con la tecnología que ofrece Innovatech Industries. Su soporte técnico y las soluciones que brindan han sido clave para el crecimiento de mi negocio. ¡Gracias por el gran trabajo!',
    avatar:
      'https://images.unsplash.com/photo-1606513542745-97629752a13b?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=334&q=80',
  },
];

function TestimonialCard({ name, role, content, avatar }) {
  return (
    <Flex
      boxShadow={'lg'}
      maxW={'640px'}
      direction={{ base: 'column-reverse', md: 'row' }}
      width={'full'}
      rounded={'xl'}
      p={10}
      justifyContent={'space-between'}
      position={'relative'}
      bg={useColorModeValue('white', 'gray.800')}
    >
      <Stack spacing={4}>
        <Text fontSize={'lg'}>{content}</Text>
        <Flex align={'center'}>
          <Avatar src={avatar} alt={'Photo of ' + name} />
          <Stack ml={4} spacing={0}>
            <Text fontWeight={600}>{name}</Text>
            <Text color={'gray.600'}>{role}</Text>
          </Stack>
        </Flex>
      </Stack>
    </Flex>
  );
}

export default function Store() {
  return (
    <Flex flex="1" direction="column" pl={6}>
    <Box>
      <HeaderStore /> {/* Asumiendo que este componente muestra el encabezado */}
      <HeroStore />
      <ProdList />

      <Box py={12} bg={useColorModeValue('gray.50', 'gray.800')}>
      


      <Container maxW="container.xl" py={10}>
     
      
      
      <Carousel />
     
      


</Container>
        <Container maxW={'7xl'}>
          <Stack spacing={10} textAlign={'center'}>
            <Heading fontSize={'3xl'}></Heading>
            <Text fontSize={'lg'} color={'gray.600'}>
              Explora nuestras innovadoras soluciones tecnológicas diseñadas para transformar tu negocio y mejorar la eficiencia operativa. Descubre cómo nuestras herramientas pueden ayudarte a alcanzar tus objetivos.
            </Text>
          </Stack>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} mt={10}>
            {testimonials.map((testimonial, index) => (
              <TestimonialCard
                key={index}
                name={testimonial.name}
                role={testimonial.role}
                content={testimonial.content}
                avatar={testimonial.avatar}
              />
            ))}
          </SimpleGrid>
         
        </Container>
      </Box>
    </Box>
    <Footer />
    </Flex>
     
  );
}

