'use client';

import {
  Box,
  Flex,
  Heading,
  Text,
  Container,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  InputLeftElement,
  Textarea,
  Button,
  VStack,
  Wrap,
  WrapItem,
  IconButton,
  HStack,
  useColorModeValue
} from '@chakra-ui/react';
import {
  MdPhone,
  MdEmail,
  MdLocationOn,
  MdFacebook,
  MdOutlineEmail
} from 'react-icons/md';
import { BsGithub, BsDiscord, BsPerson } from 'react-icons/bs';

const FAQ = () => {
  return (
    <Box p={6}>
      <Heading as="h1" mb={6} color="green">
        Preguntas Frecuentes
      </Heading>

      <Flex>
        <Box flex="3" p={5}>
          <Text mb={4}>
            Aquí encontrarás respuestas a las preguntas más frecuentes sobre nuestro sistema de gestión de producción. Si necesitas más ayuda, no dudes en contactarnos.
          </Text>

          <Accordion allowToggle>
            {/* Preguntas Frecuentes Existentes */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Cómo puedo iniciar sesión en el sistema?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Puedes iniciar sesión en el sistema utilizando tus credenciales de usuario. Si aún no tienes una cuenta, contacta al administrador para obtener acceso.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Cómo gestiono el inventario de productos?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Puedes gestionar el inventario desde el módulo de "Gestión de Inventarios". Allí podrás añadir, editar y eliminar productos, así como registrar entradas y salidas de inventario.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Cómo agrego nuevos proveedores al sistema?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Para agregar nuevos proveedores, accede al módulo de "Gestión de Proveedores" y selecciona la opción para añadir un nuevo proveedor. Completa la información requerida y guarda los cambios.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Cómo puedo ver los reportes de rendimiento de la producción?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Los reportes de rendimiento están disponibles en el módulo de "Reportes de Producción". Puedes generar informes detallados sobre el rendimiento mensual y las tendencias.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Qué hacer si encuentro un error en el sistema?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Si encuentras un error en el sistema, por favor, contacta al soporte técnico proporcionando detalles sobre el problema. Nuestro equipo trabajará para resolverlo a la brevedad.
              </AccordionPanel>
            </AccordionItem>

            {/* Nuevas Preguntas Frecuentes */}
            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Cómo configuro los permisos de usuario?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Los permisos de usuario se configuran en el módulo de "Administración de Usuarios". Allí podrás asignar roles específicos como administrador, gerente, o usuario estándar, y personalizar los accesos a cada módulo del sistema.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Puedo exportar mis datos a Excel o PDF?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Sí, el sistema permite exportar los datos en formatos Excel y PDF desde cualquier módulo que disponga de informes y tablas. Solo debes seleccionar la opción "Exportar" en la interfaz correspondiente.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Cómo realizo un respaldo de los datos del sistema?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Para realizar un respaldo de los datos, ve al módulo de "Configuración del Sistema" y selecciona la opción "Respaldar". Puedes elegir entre un respaldo manual o programado automáticamente según la frecuencia deseada.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Cómo puedo integrar el sistema con otras aplicaciones?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                El sistema cuenta con opciones de integración a través de API, lo que permite conectar con aplicaciones de terceros como sistemas de contabilidad, CRM, y otras herramientas de gestión empresarial. Consulta el módulo de "Integraciones" para configurar las conexiones.
              </AccordionPanel>
            </AccordionItem>

            <AccordionItem>
              <h2>
                <AccordionButton>
                  <Box flex="1" textAlign="left">
                    ¿Qué opciones de soporte están disponibles?
                  </Box>
                  <AccordionIcon />
                </AccordionButton>
              </h2>
              <AccordionPanel pb={4}>
                Ofrecemos soporte técnico 24/7 a través de chat en vivo, correo electrónico y llamadas telefónicas. También puedes acceder a nuestra base de conocimientos en línea para soluciones rápidas a problemas comunes.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>
        </Box>
      </Flex>
    </Box>
  );
};

export default FAQ;
