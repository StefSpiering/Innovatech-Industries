'use client';

import React, { useState } from 'react';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

export default function UserProfileEdit() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { data, error } = await supabase.from('consultas').insert([
      { nombre_usuario: nombreUsuario, email, consulta },
    ]);

    if (error) {
      toast({
        title: 'Error al enviar la consulta',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    } else {
      toast({
        title: 'Consulta enviada',
        description: 'Tu consulta ha sido enviada con éxito',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

      // Limpiar los campos del formulario
      setNombreUsuario('');
      setEmail('');
      setConsulta('');
    }
  };

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}
    >
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}
        as="form"
        onSubmit={handleSubmit}
      >
        <Heading lineHeight={1.1} fontSize={{ base: '2x1', sm: '5xl' }} color="gray">
          Consultas
        </Heading>
        <FormControl id="userName" isRequired>
          <FormLabel>Nombre de Usuario</FormLabel>
          <Input
            placeholder="Nombre de Usuario"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Dirección de Correo Electrónico</FormLabel>
          <Input
            placeholder="tu-email@ejemplo.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>
        <FormControl id="userQuery">
          <FormLabel>Consulta</FormLabel>
          <Input
            placeholder="Escribe tu consulta aquí"
            _placeholder={{ color: 'gray.500' }}
            type="text"
            value={consulta}
            onChange={(e) => setConsulta(e.target.value)}
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}
          >
            Cancelar
          </Button>
          <Button
            type="submit"
            bg={'green'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'green.500',
            }}
          >
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
