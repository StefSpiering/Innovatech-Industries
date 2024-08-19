import { ChakraProvider, extendTheme } from '@chakra-ui/react';

import '../public/styles.css'
const theme = extendTheme({
  // Configuración personalizada de Chakra UI
});

function MyApp({ Component, pageProps }) {
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
