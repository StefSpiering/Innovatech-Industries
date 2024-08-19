import {
  Container,
  SimpleGrid,
  Image,
  Flex,
  Heading,
  Text,
  Stack,
  StackDivider,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoAnalyticsSharp, IoLogoBitcoin, IoSearchSharp } from 'react-icons/io5';
import { ReactElement } from 'react';

// Componente Feature
const Feature = ({ text, icon, iconBg }) => {
  return (
    <Stack direction={'row'} align={'center'}>
      <Flex w={8} h={8} align={'center'} justify={'center'} rounded={'full'} bg={iconBg}>
        {icon}
      </Flex>
      <Text fontWeight={600}>{text}</Text>
    </Stack>
  );
};

// Componente HeroSection
export default function HeroSection() {
  return (
    <Container maxW="full" p={0} m={0} bg={useColorModeValue('gray.50', 'gray.900')}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={15}>
        <Stack spacing={9} p={15}>
          <Text
            textTransform={'uppercase'}
            color={'blue.400'}
            fontWeight={600}
            fontSize={'sm'}
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={2}
            alignSelf={'flex-start'}
            rounded={'md'}>
            Nuestras Tecnologías
          </Text>
          <Heading
            fontWeight={600}
            fontSize={{ base: '2xl', sm: '4xl', md: '6xl' }}
            lineHeight={'110%'}>
            Lo mejor en tecnologias con  <br />
            <Text as={'span'} color={'green.400'}>
              Innovatech Industries
            </Text>
          </Heading>
          <Text color={'gray.500'} fontSize={'lg'}>
            Explora nuestra amplia gama de tecnologías avanzadas y soluciones innovadoras diseñadas para satisfacer las demandas de los entornos tecnológicos modernos. Desde dispositivos de alto rendimiento hasta gadgets inteligentes, descubre cómo podemos elevar tu experiencia tecnológica.
          </Text>
          <Stack
            spacing={4}
            divider={
              <StackDivider borderColor={useColorModeValue('gray.100', 'gray.700')} />
            }>
            <Feature
              icon={<Icon as={IoAnalyticsSharp} color={'yellow.500'} w={5} h={5} />}
              iconBg={useColorModeValue('yellow.100', 'yellow.900')}
              text={'Análisis Avanzado'}
            />
            <Feature
              icon={<Icon as={IoLogoBitcoin} color={'green.500'} w={5} h={5} />}
              iconBg={useColorModeValue('green.100', 'green.900')}
              text={'Soluciones Innovadoras'}
            />
            <Feature
              icon={<Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />}
              iconBg={useColorModeValue('purple.100', 'purple.900')}
              text={'Perspectivas de Mercado'}
            />
          </Stack>
        </Stack>
        <Flex>
          <Image
            rounded={'md'}
            alt={'imagen de característica'}
            src={
              'https://images.unsplash.com/photo-1554200876-56c2f25224fa?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80'
            }
            objectFit={'cover'}
            width="100%"
          />
        </Flex>
      </SimpleGrid>
    </Container>
  );
}
