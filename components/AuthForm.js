import { useState } from 'react';
import { Container, Heading, Box, Button, Input, FormControl, FormLabel, Tab, Tabs, TabList, TabPanels, TabPanel } from '@chakra-ui/react';

export default function AuthForm() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [tabIndex, setTabIndex] = useState(0);

  const handleLogin = async () => {
    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      console.log('User logged in:', data.user);
      // Redirect or do something after login
    } catch (error) {
      console.error('Error logging in:', error.message);
    }
  };

  const handleSignUp = async () => {
    try {
      const response = await fetch('/api/auth/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, first_name: firstName, last_name: lastName }),
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.message);

      console.log('User registered:', data.message);
      // Redirect or do something after registration
    } catch (error) {
      console.error('Error signing up:', error.message);
    }
  };

  return (
    <Container maxW="sm" py={12}>
      <Box bg="white" p={8} boxShadow="lg" borderRadius="md">
        <Heading as="h2" size="lg" mb={4}>
          {tabIndex === 0 ? 'Iniciar Sesión' : 'Registrarse'}
        </Heading>
        <Tabs index={tabIndex} onChange={(index) => setTabIndex(index)} isFitted>
          <TabList>
            <Tab>Iniciar Sesión</Tab>
            <Tab>Registrarse</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <FormControl id="email" mb={4}>
                <FormLabel>Correo Electrónico</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" mb={6}>
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button colorScheme="teal" onClick={handleLogin}>
                Iniciar Sesión
              </Button>
            </TabPanel>
            <TabPanel>
              <FormControl id="first_name" mb={4}>
                <FormLabel>Nombre</FormLabel>
                <Input type="text" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
              </FormControl>
              <FormControl id="last_name" mb={4}>
                <FormLabel>Apellido</FormLabel>
                <Input type="text" value={lastName} onChange={(e) => setLastName(e.target.value)} />
              </FormControl>
              <FormControl id="email" mb={4}>
                <FormLabel>Correo Electrónico</FormLabel>
                <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              </FormControl>
              <FormControl id="password" mb={6}>
                <FormLabel>Contraseña</FormLabel>
                <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              </FormControl>
              <Button colorScheme="teal" onClick={handleSignUp}>
                Registrarse
              </Button>
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Box>
    </Container>
  );
}
