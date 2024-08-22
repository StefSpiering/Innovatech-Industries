import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient';
import { Box, Button, Container, Heading, Stack, Text, useColorModeValue, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/router'; 

const CartPage = () => {
  const [cartItems, setCartItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [total, setTotal] = useState(0);  
  const router = useRouter(); 

  useEffect(() => {
    const fetchCartItems = async () => {
      try {
        const { data, error: userError } = await supabase.auth.getUser();
        if (userError) throw userError;

        const user = data?.user;

        if (!user || !user.id) {
          throw new Error('Debes iniciar sesión para ver tu carrito.');
        }

        const { data: cartData, error: cartError } = await supabase
          .from('cart_items')
          .select(`
            id,
            product_id,
            quantity,
            products (
              name,
              description,
              price
            )
          `)
          .eq('user_id', user.id);

        if (cartError) throw cartError;

        setCartItems(cartData || []);

        const calculatedTotal = cartData.reduce((sum, item) => {
          return sum + item.products.price * item.quantity;
        }, 0);
        setTotal(calculatedTotal);

      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCartItems();
  }, []);

  const handleRemoveFromCart = async (itemId) => {
    try {
      const { error } = await supabase
        .from('cart_items')
        .delete()
        .eq('id', itemId);

      if (error) {
        throw new Error('Error al eliminar el producto del carrito.');
      }

      setCartItems((prevItems) => prevItems.filter((item) => item.id !== itemId));

      const updatedTotal = cartItems.reduce((sum, item) => {
        return sum + item.products.price * item.quantity;
      }, 0);
      setTotal(updatedTotal);

    } catch (error) {
      console.error('Error removing item from cart:', error.message);
      setError(error.message);
    }
  };

  const handleProceedToPayment = () => {
    sessionStorage.setItem('total', total.toFixed(2)); 

    router.push('/pago'); 
  };

  if (loading) return <Text>Cargando carrito...</Text>;
  if (error) return <Text color="red.500">{error}</Text>;

  return (
    <Container maxW="5xl" py={12}>
      <Heading as="h1" mb={6}>Tu Carrito de Compras</Heading>
      {cartItems.length > 0 ? (
        <Stack spacing={4}>
          {cartItems.map((item) => (
            <Box
              key={item.id}
              borderWidth="1px"
              borderRadius="lg"
              p={4}
              bg={useColorModeValue('white', 'gray.800')}
              boxShadow="sm"
            >
              <Heading as="h4" size="md">{item.products.name}</Heading>
              <Text>{item.products.description}</Text>
              <Text fontWeight="bold">${item.products.price.toFixed(2)}</Text>
              <Text>Cantidad: {item.quantity}</Text>
              <Button
                mt={4}
                colorScheme="red"
                onClick={() => handleRemoveFromCart(item.id)}
              >
                Eliminar
              </Button>
            </Box>
          ))}
          <Divider my={4} />
          <Box>
            <Text fontWeight="bold" fontSize="xl">Total: ${total.toFixed(2)}</Text>
          </Box>
          <Button colorScheme="blue" onClick={handleProceedToPayment}>
            Proceder al Pago
          </Button>
        </Stack>
      ) : (
        <Text>No hay productos en el carrito</Text>
      )}
    </Container>
  );
};

export default CartPage;