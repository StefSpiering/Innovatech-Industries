'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Información sobre Innovatech Industries
const features = [
  {
    id: 1,
    title: 'Tecnología Avanzada',
    text: 'Utilizamos las últimas tecnologías para ofrecer soluciones innovadoras en el campo de la electrónica de consumo.',
  },
  {
    id: 2,
    title: 'Automatización Eficiente',
    text: 'Implementamos sistemas de automatización para mejorar la eficiencia y reducir los costos operativos en la producción.',
  },
  {
    id: 3,
    title: 'Soporte Técnico Integral',
    text: 'Proporcionamos soporte técnico completo para asegurar el funcionamiento continuo y la resolución rápida de problemas.',
  },
  {
    id: 4,
    title: 'Innovación Continua',
    text: 'Nos comprometemos a la innovación continua para ofrecer productos y servicios de vanguardia en el mercado.',
  },
  {
    id: 5,
    title: 'Soluciones Personalizadas',
    text: 'Ofrecemos soluciones personalizadas para satisfacer las necesidades específicas de cada cliente.',
  },
  {
    id: 6,
    title: 'Gestión de Proyectos Eficaz',
    text: 'Gestionamos proyectos de manera efectiva para garantizar la entrega a tiempo y dentro del presupuesto.',
  },
  {
    id: 7,
    title: 'Investigación y Desarrollo',
    text: 'Invertimos en investigación y desarrollo para mantenernos a la vanguardia de las tendencias tecnológicas.',
  },
  {
    id: 8,
    title: 'Sostenibilidad Ambiental',
    text: 'Adoptamos prácticas sostenibles para minimizar el impacto ambiental de nuestras operaciones.',
  }
]

export default function GridListWithHeading() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>Nuestros Servicios y Beneficios</Heading>
        <Text color={'gray.600'} fontSize={'xl'}>
          En Innovatech Industries, nos dedicamos a proporcionar soluciones tecnológicas avanzadas y servicios excepcionales para la industria de dispositivos electrónicos de consumo. Descubre cómo nuestros servicios pueden transformar tu negocio.
        </Text>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}
