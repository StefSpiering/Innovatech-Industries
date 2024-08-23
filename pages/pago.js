import { Box, Container, Heading, Text, Button, Stack, FormControl, FormLabel, Input, useToast, SimpleGrid, Divider } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import supabase from '../lib/supabaseClient'; // Asegúrate de que la ruta sea correcta

export default function PagoPage() {
  const [loading, setLoading] = useState(true);
  const [total, setTotal] = useState(0);
  const [address, setAddress] = useState({ pinCode: '', locality: '', city: '', state: '', name: '', addressLine: '', mobile: '' });
  const [paymentDetails, setPaymentDetails] = useState({ cardNumber: '', expiryDate: '', cvv: '', cardHolderName: '' });
  const toast = useToast();
  const router = useRouter();

  useEffect(() => {
    const storedTotal = sessionStorage.getItem('total');
    if (storedTotal) {
      setTotal(parseFloat(storedTotal));
    }
    setLoading(false);
  }, []);

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setAddress({ ...address, [id]: value });
  };

  const handlePaymentChange = (e) => {
    const { id, value } = e.target;
    setPaymentDetails({ ...paymentDetails, [id]: value });
  };

  const handlePayment = async () => {
    const { pinCode, locality, city, state, name, addressLine, mobile } = address;
    const { cardNumber, expiryDate, cvv, cardHolderName } = paymentDetails;

    if (!pinCode || !locality || !city || !state || !name || !addressLine || !mobile) {
      toast({
        title: 'Campos incompletos.',
        description: 'Por favor, completa todos los campos para proceder con el pago.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

    if (!cardNumber || !expiryDate || !cvv || !cardHolderName) {
      toast({
        title: 'Detalles de pago incompletos.',
        description: 'Por favor, completa todos los campos de pago.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
      return;
    }

     try {
      const { data: { session }, error: sessionError } = await supabase.auth.getSession();
  
      if (sessionError) {
        throw new Error('No se pudo obtener la sesión del usuario.');
      }
  
      const user = session?.user;
  
      if (!user) {
        throw new Error('No se pudo identificar al usuario.');
      }
  
      
      const cartItems = JSON.parse(sessionStorage.getItem('cart_items')) || [];
      console.log("cartItems:", cartItems);
      
      // Verifica si cartItems es un array
      if (!Array.isArray(cartItems)) {
        throw new Error('Los elementos del carrito no están en el formato correcto.');
      }
  
      // Inserta la transacción
      const { data: transaction, error: transactionError } = await supabase
        .from('transactions')
        .insert({
          user_id: user.id,
          transaction_date: new Date().toISOString(),
          amount: total,
          description: `Compra realizada por ${name}`,
        })
        .select()
        .single();
  
      if (transactionError) {
        throw new Error('Error al registrar la transacción');
      }
  
      const transaction_id = transaction.id;

      console.log("Transaction ID:", transaction_id);
      console.log("Cart Items:", cartItems);
  
      for (const item of cartItems) {
        const { product_id, quantity } = item;
  
        const { error: itemError } = await supabase
          .from('transaction_items')
          .insert({
            transaction_id,
            product_id,
            quantity,
          });
  
        if (itemError) {
          throw new Error('Error al registrar los detalles de la transacción');
        }
  
        // Actualizar las cantidades en la tabla products
        const { error: updateError } = await supabase
          .from('products')
          .update({ cantidades: supabase.raw('cantidades - ?', quantity) })
          .eq('id', product_id);
  
        if (updateError) {
          throw new Error('Error al actualizar las cantidades de productos');
        }

        console.log("Item inserted:", insertData);
      }
  
      toast({
        title: 'Pago realizado con éxito.',
        description: 'Tu pago ha sido procesado correctamente.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
  
    } catch (error) {
      console.error('Error al procesar el pago:', error);
      toast({
        title: 'Error al procesar el pago.',
        description: error.message || 'Hubo un problema al procesar tu pago. Inténtalo nuevamente.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };


  if (loading) {
    return <Text>Cargando...</Text>;
  }

  return (
    <Container maxW="container.xl" py={6}>
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
        <Box>
          <Heading as="h2" mb={6}>Añadir Nueva Dirección</Heading>
          <Stack spacing={4}>
            <FormControl id="pinCode">
              <FormLabel>Código Postal</FormLabel>
              <Input type="text" value={address.pinCode} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="locality">
              <FormLabel>Localidad / Municipio</FormLabel>
              <Input type="text" value={address.locality} onChange={handleInputChange} />
            </FormControl>
            <SimpleGrid columns={2} spacing={4}>
              <FormControl id="city">
                <FormLabel>Ciudad / Distrito</FormLabel>
                <Input type="text" value={address.city} onChange={handleInputChange} />
              </FormControl>
              <FormControl id="state">
                <FormLabel>Estado</FormLabel>
                <Input type="text" value={address.state} onChange={handleInputChange} />
              </FormControl>
            </SimpleGrid>
            <FormControl id="name">
              <FormLabel>Nombre</FormLabel>
              <Input type="text" value={address.name} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="addressLine">
              <FormLabel>Dirección</FormLabel>
              <Input type="text" value={address.addressLine} onChange={handleInputChange} />
            </FormControl>
            <FormControl id="mobile">
              <FormLabel>Número de Móvil</FormLabel>
              <Input type="text" value={address.mobile} onChange={handleInputChange} />
            </FormControl>
            <Button colorScheme="teal" mt={4} onClick={() => toast({
              title: 'Dirección guardada.',
              description: 'Tu dirección ha sido guardada correctamente.',
              status: 'success',
              duration: 5000,
              isClosable: true,
            })}>
              Guardar
            </Button>
          </Stack>
        </Box>
        <Box>
          <Heading as="h2" mb={6}>Resumen del Pedido</Heading>
          <Box p={6} borderWidth={1} borderRadius="lg" boxShadow="md">
            <Text fontSize="lg">Entrega estándar</Text>
            <Text mb={4}>Entrega gratuita</Text>
            <Divider />
            <Text fontSize="lg" mt={4}>
              Total de Productos: 
              {(() => {
                const cartItems = JSON.parse(sessionStorage.getItem('cart_items')) || [];
                return cartItems.length;
              })()}
            </Text>
            <Text fontSize="xl" fontWeight="bold" mt={2}>Total a Pagar: ${total.toFixed(2)}</Text>
            <Divider my={4} />
            <Heading as="h3" size="md" mb={4}>Detalles de Pago</Heading>
            <FormControl id="cardHolderName">
              <FormLabel>Nombre en la Tarjeta</FormLabel>
              <Input type="text" value={paymentDetails.cardHolderName} onChange={handlePaymentChange} />
            </FormControl>
            <FormControl id="cardNumber" mt={4}>
              <FormLabel>Número de Tarjeta</FormLabel>
              <Input type="text" value={paymentDetails.cardNumber} onChange={handlePaymentChange} />
            </FormControl>
            <SimpleGrid columns={2} spacing={4} mt={4}>
              <FormControl id="expiryDate">
                <FormLabel>Fecha de Vencimiento</FormLabel>
                <Input type="text" placeholder="MM/YY" value={paymentDetails.expiryDate} onChange={handlePaymentChange} />
              </FormControl>
              <FormControl id="cvv">
                <FormLabel>CVV</FormLabel>
                <Input type="text" value={paymentDetails.cvv} onChange={handlePaymentChange} />
              </FormControl>
            </SimpleGrid>
            <Button colorScheme="blue" mt={4} onClick={handlePayment} width="full">
              Pagar
            </Button>
          </Box>
        </Box>
      </SimpleGrid>
      <Box mt={10} textAlign="center">
        <Text fontSize="sm" color="gray.500">Formas de pago aceptadas:</Text>
        <Text fontSize="lg" fontWeight="bold" color="gray.700" mt={2}>
          Visa, MasterCard, Amex, PayPal, etc.
        </Text>
      </Box>
    </Container>
  );
}
