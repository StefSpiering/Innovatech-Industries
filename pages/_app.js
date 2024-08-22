import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import { CartProvider } from '../context/CartContext';

import '../public/styles.css'
const theme = extendTheme({
  // Configuración personalizada de Chakra UI
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <CartProvider>
      <Component {...pageProps} />
      </CartProvider>
    </ChakraProvider>
  );
}

export default MyApp;
