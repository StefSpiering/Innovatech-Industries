'use client';

import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Stack,
  useColorModeValue,
  HStack,
  Avatar,
  AvatarBadge,
  IconButton,
  Center,
} from '@chakra-ui/react';
import { SmallCloseIcon } from '@chakra-ui/icons';

export default function UserProfileEdit() {
  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack
        spacing={4}
        w={'full'}
        maxW={'md'}
        bg={useColorModeValue('white', 'gray.700')}
        rounded={'xl'}
        boxShadow={'lg'}
        p={6}
        my={12}>
        <Heading lineHeight={1.1} fontSize={{ base: '2x1', sm: '5xl' }} color="gray">
          Consultas
        </Heading>
        <FormControl id="userIcon">
          <FormLabel>Adjunte su consulta:</FormLabel>
          <Stack direction={['column', 'row']} spacing={6}>
            <Center>
             
            </Center>
            <Center w="full">
             
            </Center>
          </Stack>
        </FormControl>
        <FormControl id="userName" isRequired>
          <FormLabel>Nombre de Usuario</FormLabel>
          <Input
            placeholder="Nombre de Usuario"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <FormControl id="email" isRequired>
          <FormLabel>Dirección de Correo Electrónico</FormLabel>
          <Input
            placeholder="tu-email@ejemplo.com"
            _placeholder={{ color: 'gray.500' }}
            type="email"
          />
        </FormControl>
       
        <FormControl id="userQuery">
          <FormLabel>Consulta</FormLabel>
          <Input
            placeholder="Escribe tu consulta aquí"
            _placeholder={{ color: 'gray.500' }}
            type="text"
          />
        </FormControl>
        <Stack spacing={6} direction={['column', 'row']}>
          <Button
            bg={'red.400'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'red.500',
            }}>
            Cancelar
          </Button>
          <Button
            bg={'green'}
            color={'white'}
            w="full"
            _hover={{
              bg: 'green',
            }}>
            Enviar
          </Button>
        </Stack>
      </Stack>
    </Flex>
  );
}
