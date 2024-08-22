import { ChakraProvider, Container, Heading, Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; // Asumiendo que tienes un componente Sidebar para el menú
import Hero from '../components/Hero';
import Info from '../components/Info';
import Carousel from '../components/Carousel';
import supabase from '../lib/supabaseClient'; // Asegúrate de tener esto configurado
import { useEffect, useState } from 'react';

const HomePage = () => {
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const checkUserRole = async () => {
      const { data, error } = await supabase.auth.getUser();
      if (error) {
        console.error("Error fetching user:", error);
        return;
      }

      const user = data?.user;
      console.log(user);

      if (user) {
        // Aquí cambiamos la verificación para utilizar la columna "type"
        const { data: userInfo, error: userError } = await supabase
          .from('users')
          .select('type')
          .eq('id', user.id)
          .single();

        if (userError) {
          console.error("Error fetching user type:", userError);
          return;
        }

        if (userInfo.type === 1) { // Supongamos que 1 es el tipo de administrador
          setIsAdmin(true);
        } else {
          setIsAdmin(false);
        }
      }
    };

    checkUserRole();
  }, []);

  return (
    <ChakraProvider>
      <Box bg="gray.100" minHeight="100vh" display="flex" flexDirection="column">
        {/* Header que ocupa toda la anchura */}
        <Header />

        {/* Contenedor principal para el contenido */}
        <Flex flex="1" p={6}>
          {/* Mostrar Sidebar solo si el usuario es administrador */}
          {isAdmin && (
            <Box width="250px" bg="white" p={5} boxShadow="md">
              <Sidebar />
            </Box>
          )}

          {/* Contenido principal */}
          <Flex flex="1" direction="column" pl={isAdmin ? 6 : 0}>
            <Container maxW="container.xl" py={10}>
              <Heading as="h1" size="2xl" mb={6} textAlign="center">
                Página de Inicio
              </Heading>
              <Hero />
            </Container>

            <Container maxW="container.xl" py={10}>
              <Carousel />
            </Container>

            <Container maxW="container.xl" py={10}>
              <Info />
            </Container>
            <Box flex="1" /> {/* Espacio flexible para empujar el footer hacia abajo */}
          </Flex>
        </Flex>

        {/* Footer al final de la página */}
        <Footer />
      </Box>
    </ChakraProvider>
  );
};

export default HomePage;