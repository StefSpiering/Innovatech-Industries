import { useState } from 'react';
import { Box, Button, Container, FormControl, FormLabel, Input, Textarea, useToast, Heading, Stack } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';



export default function ConsultasPage() {
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [email, setEmail] = useState('');
  const [consulta, setConsulta] = useState('');
  const toast = useToast();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Validar los campos
    if (!nombreUsuario || !email || !consulta) {
      toast({
        title: 'Campos incompletos.',
        description: 'Por favor, completa todos los campos antes de enviar.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      // Enviar la consulta a la base de datos
      const { data, error } = await supabase
        .from('consultas')
        .insert([{ nombre_usuario: nombreUsuario, email, consulta }]);

      if (error) {
        throw error;
      }

      toast({
        title: 'Consulta enviada.',
        description: 'Tu consulta ha sido enviada exitosamente. Nos pondremos en contacto contigo pronto.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });

      // Limpiar los campos
      setNombreUsuario('');
      setEmail('');
      setConsulta('');

    } catch (error) {
      console.error('Error submitting consulta:', error);
      toast({
        title: 'Error.',
        description: 'Hubo un error al enviar tu consulta. Por favor, intenta nuevamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  return (
    <Box
    
      bgImage="url('https://images.unsplash.com/photo-1518770660439-4636190af475?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=MnwzNjUyOXwwfDF8c2VhcmNofDF8fHRlY2hub2xvZ3klMjB8ZW58MHx8fHwxNjA5NzY0NTg0&ixlib=rb-1.2.1&q=80&w=1080')"
      bgSize="cover"
      bgPosition="center"
      minHeight="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Container maxW="container.md">
        <Stack
          spacing={4}
          bg="white"  // Cambié el fondo a blanco
          boxShadow="lg"
          p={8}
          rounded="lg"
          backdropFilter="blur(10px)"
        >


          
      
     
          <Heading as="h1" mb={6} textAlign="center" fontSize="3xl">Envíanos tu Consulta</Heading>
          <Box as="form" onSubmit={handleSubmit}>
          
            
            
            <FormControl id="nombre_usuario" mb={4} isRequired>
              <FormLabel>Nombre</FormLabel>
              <Input
                type="text"
                value={nombreUsuario}
                onChange={(e) => setNombreUsuario(e.target.value)}
              />
            </FormControl>
            <FormControl id="email" mb={4} isRequired>
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </FormControl>
            <FormControl id="consulta" mb={4} isRequired>
              <FormLabel>Consulta</FormLabel>
              <Textarea
                value={consulta}
                onChange={(e) => setConsulta(e.target.value)}
              />
            </FormControl>
            <Button type="submit" colorScheme="green" size="lg" width="full">Enviar</Button>
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
