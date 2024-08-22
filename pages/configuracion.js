'use client';

import { useState, useEffect } from 'react';
import { Text, Box, Button, Container, FormControl, FormLabel, Input, Stack, useToast, Heading, Avatar, Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react';
import { useRouter } from 'next/router';  // Importa el hook useRouter
import supabase from '../lib/supabaseClient';

export default function Configuracion() {
  const [userId, setUserId] = useState(null);
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const toast = useToast();
  const router = useRouter();  // Inicializa el hook useRouter

  useEffect(() => {
    const fetchUserData = async () => {
      const { data: sessionData } = await supabase.auth.getSession();

      if (sessionData.session) {
        const user = sessionData.session.user;
        setUserId(user.id);

        const { data: userProfile, error } = await supabase
          .from('users')
          .select('email, first_name, last_name')
          .eq('id', user.id)
          .single();

        if (userProfile) {
          setEmail(userProfile.email);
          setFirstName(userProfile.first_name);
          setLastName(userProfile.last_name);
        }

        if (error) {
          console.error('Error fetching user data:', error);
        }
      }
    };

    fetchUserData();
  }, []);

  const handleUpdateProfile = async () => {
    if (newPassword && newPassword !== confirmPassword) {
      toast({
        title: 'Error.',
        description: 'Las contraseñas no coinciden.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    try {
      const updates = {
        first_name: firstName,
        last_name: lastName,
      };

      if (newPassword) {
        const { error: passwordError } = await supabase.auth.updateUser({ password: newPassword });
        if (passwordError) {
          throw passwordError;
        }
      }

      const { error } = await supabase
        .from('users')
        .update(updates)
        .eq('id', userId);

      if (error) {
        throw error;
      }

      toast({
        title: 'Perfil actualizado.',
        description: 'Tu perfil ha sido actualizado exitosamente.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error updating profile:', error);
      toast({
        title: 'Error.',
        description: 'Hubo un error al actualizar tu perfil.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  const handleBackClick = () => {
    router.back();  // Esta función permitirá al usuario volver a la página anterior
  };

  return (
    <Container maxW="container.lg" py={6}>
      <Box display="flex" alignItems="center" mb={8}>
        <Avatar size="xl" name={`${firstName} ${lastName}`} mr={6} />
        <Box>
          <Heading as="h1" fontSize="2xl">{`${firstName} ${lastName}`}</Heading>
        </Box>
      </Box>

      <Button mb={4} onClick={handleBackClick} colorScheme="blue">Volver</Button> {/* Botón para volver a la página anterior */}

      <Tabs variant="soft-rounded" colorScheme="purple">
        <TabList mb={4}>
          <Tab>Usuario</Tab>
          <Tab>Seguridad</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Stack spacing={4} bg="white" p={8} rounded="lg" boxShadow="lg">
              <FormControl id="first_name">
                <FormLabel>First Name</FormLabel>
                <Input
                  type="text"
                  value={firstName}
                  onChange={(e) => setFirstName(e.target.value)}
                />
              </FormControl>
              <FormControl id="last_name">
                <FormLabel>Last Name</FormLabel>
                <Input
                  type="text"
                  value={lastName}
                  onChange={(e) => setLastName(e.target.value)}
                />
              </FormControl>
              <FormControl id="email" isDisabled>
                <FormLabel>Email</FormLabel>
                <Input
                  type="email"
                  value={email}
                  isDisabled
                />
              </FormControl>
              <FormControl id="new_password">
                <FormLabel>New Password</FormLabel>
                <Input
                  type="password"
                  value={newPassword}
                  onChange={(e) => setNewPassword(e.target.value)}
                />
              </FormControl>
              <FormControl id="confirm_password">
                <FormLabel>Confirm Password</FormLabel>
                <Input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />
              </FormControl>
              <Button colorScheme="purple" size="lg" onClick={handleUpdateProfile}>
                Guardar
              </Button>
            </Stack>
          </TabPanel>
          <TabPanel>
            <Text>Configuracion de seguridad</Text>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Container>
  );
}
