'use client';

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
} from '@chakra-ui/react';

// Creación del cliente Supabase
const supabase = createClient(process.env.NEXT_PUBLIC_SUPABASE_URL, process.env.NEXT_PUBLIC_SUPABASE_KEY);

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const toast = useToast();

  const handleLogin = async () => {
    try {
      const { data, error: loginError } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (loginError) {
        throw loginError;
      }

      console.log('User logged in successfully');
      toast({
        title: 'Inicio de sesión exitoso.',
        description: 'Has iniciado sesión con éxito.',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      // Redirect or perform some action after login
    } catch (error) {
      setError(error.message);
      console.error('Error logging in:', error.message);
      toast({
        title: 'Error al iniciar sesión.',
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
        <Box position="absolute" top={4} left={4}>
          <Image
            src="/images/logo.png" // Asegúrate de reemplazar con la ruta correcta de tu logo
            alt="Logo"
            boxSize="50px" // Ajusta el tamaño del logo según sea necesario
          />
        </Box>
        <Stack spacing={4} w={'full'} maxW={'md'}>
          <Heading fontSize={'2xl'}>Inicia sesión en tu cuenta</Heading>
          {error && <Text color={'red.500'}>{error}</Text>}
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
          <Button colorScheme={'green'} variant={'solid'} onClick={handleLogin}>
            Iniciar sesión
          </Button>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={'Login Image'}
          objectFit={'cover'}
          src={
            'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1352&q=80'
          }
        />
      </Flex>
    </Stack>
  );
}
