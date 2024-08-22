import { Flex, Box, useColorModeValue } from '@chakra-ui/react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import ConsultaList from '../components/ConsultaList';

export default function SeccionConsultas() {
  return (
    <Flex direction="column" minH="100vh">
      <Header />
      <Flex>
        <Sidebar />
        <Box
          flex="1"
          bg={useColorModeValue('gray.50', 'gray.800')}
          p={6}
        >
          <Box
            bg={useColorModeValue('white', 'gray.700')}
            rounded={'xl'}
            boxShadow={'lg'}
            p={6}
          >
            <Box mb={4}>
              <h1>Sección para Consultas</h1>
              <p>Contestar tus consultas.</p>
            </Box>
            <ConsultaList />
          </Box>
        </Box>
      </Flex>
    </Flex>
  );
}
