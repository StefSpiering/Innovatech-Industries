import { ChakraProvider, Container, Heading, Box, Flex } from '@chakra-ui/react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import Sidebar from '../components/Sidebar'; // Asumiendo que tienes un componente Sidebar para el menú

import Hero from '../components/Hero';
import Info from '../components/Info';
import Carousel from '../components/Carousel';



const HomePage = () => {
  return (
    <ChakraProvider>
      <Box bg="gray.100" minHeight="100vh" display="flex" flexDirection="column">
        {/* Header que ocupa toda la anchura */}
        <Header />

        {/* Contenedor principal para el contenido */}
        <Flex flex="1" p={6}>
          {/* Sidebar ocupando toda la columna izquierda */}
          <Box width="250px" bg="white" p={5} boxShadow="md">
            <Sidebar />
          </Box>

          {/* Contenido principal */}
          <Flex flex="1" direction="column" pl={6}>
            <Container maxW="container.xl" py={10}>
              <Heading as="h1" size="2xl" mb={6} textAlign="center">
                Página de Inicio
              </Heading>
              <Hero />
           
              
              {/* Aquí puedes colocar el componente CallToActionWithAnnotation */}
             
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