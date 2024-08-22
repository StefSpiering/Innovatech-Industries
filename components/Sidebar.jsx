import Link from 'next/link';
import { Box, Flex, Icon, useColorModeValue, Text, Divider } from '@chakra-ui/react';
import {
  FiHome,
  FiPackage,
  FiDollarSign,
  FiDatabase,
  FiHelpCircle,
  FiMail,
  FiUsers,
  FiShoppingCart,
  FiEdit3,
  FiSettings,
} from 'react-icons/fi';

const LinkItems = [
  { name: 'Home', icon: FiHome, route: '/' },
  { name: 'Gestión de Usuarios', icon: FiUsers, route: '/gestion-usuarios' },
  { name: 'Gestión de Proveedores', icon: FiPackage, route: '/gestion-proveedores' },
  { name: 'Gestión de Productos', icon: FiEdit3, route: '/gestion-productos' },
  { name: 'Órdenes de Compra', icon: FiShoppingCart, route: '/ordenes-compra' },
  { name: 'Gestión de Transacciones', icon: FiDollarSign, route: '/gestion-transacciones' },


  { name: 'Consultas y Reportes', icon: FiDatabase, route: '/consultas-reportes' },
  { name: 'Sección de Ayuda', icon: FiHelpCircle, route: '/seccion-ayuda' },
  { name: 'Sección para Consultas', icon: FiMail, route: '/seccion-consultas' },
  { name: 'Configuración', icon: FiSettings, route: '/configuracion' },
];

const SidebarContent = ({ onClose, ...rest }) => {
  return (
    <Box
      transition="0.3s ease"
      bg={useColorModeValue('white', 'gray.900')}
      borderRight="1px"
      borderRightColor={useColorModeValue('gray.200', 'gray.700')}
      w={{ base: 'full', md: 60 }}
      pos="sticky"
      h="full"
      {...rest}>
      <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
        <Text as={'span'} color={'green.400'}>
          Menu Principal
        </Text>
        {/* Close Button */}
      </Flex>
      <Divider />
      {LinkItems.map((link) => (
        <NavItem key={link.name} icon={link.icon} route={link.route}>
          {link.name}
        </NavItem>
      ))}
    </Box>
  );
};

const NavItem = ({ icon, children, route, ...rest }) => {
  return (
    <Link href={route} passHref>
      <Box
        as="a"
        style={{ textDecoration: 'none' }}
        _focus={{ boxShadow: 'none' }}
        {...rest}>
        <Flex
          align="center"
          p="4"
          mx="4"
          borderRadius="lg"
          role="group"
          cursor="pointer"
          _hover={{
            bg: 'cyan.400',
            color: 'white',
          }}>
          {icon && (
            <Icon
              mr="4"
              fontSize="16"
              _groupHover={{
                color: 'white',
              }}
              as={icon}
            />
          )}
          {children}
        </Flex>
      </Box>
    </Link>
  );
};

export default SidebarContent;
