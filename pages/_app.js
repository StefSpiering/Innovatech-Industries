import { ChakraProvider, extendTheme } from '@chakra-ui/react';
import Head from 'next/head';
import { CartProvider } from '../context/CartContext';

import '../public/styles.css'
const theme = extendTheme({
  // Configuración personalizada de Chakra UI
});

function MyApp({ Component, pageProps }) {
  return (
    
    <ChakraProvider theme={theme}>
      <CartProvider>
      <Head>
        <link rel="icon" href="/images/Logo.png" type="image/png" />
      </Head>
      <Component {...pageProps} />
      </CartProvider>
    </ChakraProvider>
  );
}

export default MyApp;
