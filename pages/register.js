'use client'

import { useState } from 'react';
import { createClient } from '@supabase/supabase-js';
import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  Image,
  Box,
  useToast,
  Text,
  Link,
} from '@chakra-ui/react';
import NextLink from 'next/link';

// Creación del cliente Supabase
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

export default function Register() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();

  const handleRegister = async () => {
    try {
      const { user, error: signupError } = await supabase.auth.signUp({
        email,
        password,
      });

      if (signupError) {
        console.error('Signup error details:', signupError);
        throw signupError;
      }
      console.log('User object:', user);

      if (!user) {
        throw new Error('No se pudo crear el usuario. Intenta nuevamente.');
      }

      const { error: insertError } = await supabase
        .from('users')
        .insert([
          {
            email,
            first_name: firstName,
            last_name: lastName,
            password,  
            type: 0,
          },
        ]);

      if (insertError) {
        throw insertError;
      }

      toast({
        title: 'Registro exitoso.',
        description: 'Tu cuenta ha sido creada. Ahora puedes iniciar sesión.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });

    } catch (error) {
      setError(error.message);
      console.error('Error registering:', error.message);
      toast({
        title: 'Error al registrarse.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Stack minH={'100vh'} direction={{ base: 'column', md: 'row' }}>
      <Flex
        p={8}
        flex={1}
        align={'center'}
        justify={'center'}
        position="relative"
      >
        {/* Logo en la esquina superior */}
        <Box
          position="absolute"
          top={4}
          left={4}
        >
          <Image
            src="/images/logo.png" 
            alt="Logo"
            boxSize="50px" 
          />
        </Box>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Regístrate para tu cuenta</Heading>
          {error && <Text color={'red.500'}>{error}</Text>}
          <FormControl id="first_name" mb={4}>
            <FormLabel>Nombre</FormLabel>
            <Input
              type="text"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
            />
          </FormControl>
          <FormControl id="last_name" mb={4}>
            <FormLabel>Apellido</FormLabel>
            <Input
              type="text"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
            />
          </FormControl>
          
        <FormControl id="email" mb={4}>
            <FormLabel>Correo Electrónico</FormLabel>
            <Input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormControl>
          <FormControl id="password" mb={6}>
            <FormLabel>Contraseña</FormLabel>
            <Input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </FormControl>
          <Button colorScheme={'green'} variant={'solid'} onClick={handleRegister}>
            Registrarse
          </Button>
          <Text align="center" mt={6}>
            ¿Ya tienes una cuenta?{' '}
            <Link as={NextLink} href="/login" color="teal.500">
              Inicia sesión
            </Link>
          </Text>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Register Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
