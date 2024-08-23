import {
  Box,
  Container,
  Stack,
  SimpleGrid,
  Text,
  VisuallyHidden,
  chakra,
  useColorModeValue,
} from '@chakra-ui/react'
import { FaTwitter, FaYoutube, FaInstagram } from 'react-icons/fa'

const ListHeader = ({ children }) => {
  return (
    <Text fontWeight={'500'} fontSize={'lg'} mb={2}>
      {children}
    </Text>
  )
}

const SocialButton = ({ children, label, href }) => {
  return (
    <chakra.button
      bg={useColorModeValue('blackAlpha.100', 'whiteAlpha.100')}
      rounded={'full'}
      w={8}
      h={8}
      cursor={'pointer'}
      as={'a'}
      href={href}
      display={'inline-flex'}
      alignItems={'center'}
      justifyContent={'center'}
      transition={'background 0.3s ease'}
      _hover={{
        bg: useColorModeValue('blackAlpha.200', 'whiteAlpha.200'),
      }}>
      <VisuallyHidden>{label}</VisuallyHidden>
      {children}
    </chakra.button>
  )
}

export default function Footer() {
  return (
    <Box
      bg={useColorModeValue('gray.50', 'gray.900')}
      color={useColorModeValue('gray.700', 'gray.200')}>
      <Container as={Stack} maxW={'6xl'} py={10}>
        <SimpleGrid columns={{ base: 1, sm: 2, md: 4 }} spacing={8}>
          <Stack align={'flex-start'}>
            <ListHeader>Compañía</ListHeader>
            <Box as="a" href={'#'}>
              Sobre Nosotros
            </Box>
            <Box as="a" href={'#'}>
              Blog
            </Box>
            <Box as="a" href={'#'}>
              Carreras
            </Box>
            <Box as="a" href={'#'}>
              Contáctanos
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Soporte</ListHeader>
            <Box as="a" href={'#'}>
              Centro de Ayuda
            </Box>
            <Box as="a" href={'#'}>
              Centro de Seguridad
            </Box>
            <Box as="a" href={'#'}>
              Directrices de la Comunidad
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Legal</ListHeader>
            <Box as="a" href={'#'}>
              Política de Cookies
            </Box>
            <Box as="a" href={'#'}>
              Política de Privacidad
            </Box>
            <Box as="a" href={'#'}>
              Términos de Servicio
            </Box>
            <Box as="a" href={'#'}>
              Cumplimiento de la Ley
            </Box>
          </Stack>

          <Stack align={'flex-start'}>
            <ListHeader>Instalar App</ListHeader>
            {/* Puedes añadir aquí los iconos para la App Store y Play Store si lo deseas */}
            <Box as="a" href="#" aria-label="App Store">
              <Text>Icono de App Store</Text>
            </Box>
            <Box as="a" href="#" aria-label="Play Store">
              <Text>Icono de Play Store</Text>
            </Box>
          </Stack>
        </SimpleGrid>
      </Container>

      <Box
        borderTopWidth={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.700')}>
        <Container
          as={Stack}
          maxW={'6xl'}
          py={4}
          direction={{ base: 'column', md: 'row' }}
          spacing={4}
          justify={{ md: 'space-between' }}
          align={{ md: 'center' }}>
          <Text>© 2024 Innovatech Industries. Todos los derechos reservados</Text>
          <Stack direction={'row'} spacing={6}>
            <SocialButton label={'Twitter'} href={'https://twitter.com'}>
              <FaTwitter />
            </SocialButton>
            <SocialButton label={'YouTube'} href={'https://youtube.com'}>
              <FaYoutube />
            </SocialButton>
            <SocialButton label={'Instagram'} href={'https://instagram.com'}>
              <FaInstagram />
            </SocialButton>
          </Stack>
        </Container>
      </Box>
    </Box>
  )
}
