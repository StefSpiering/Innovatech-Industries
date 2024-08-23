import { useState } from 'react';
import supabase from '../lib/supabaseClient';
import { Button, useToast } from '@chakra-ui/react';

const AddToCartButton = ({ product }) => {
  const [loading, setLoading] = useState(false);
  const toast = useToast();

  const handleAddToCart = async () => {
    setLoading(true);

    try {
      const { data, error: userError } = await supabase.auth.getUser();

      if (userError) {
        console.error("Error fetching user:", userError);
        throw userError;
      }

      const user = data?.user;

      if (!user || !user.id) {
        throw new Error('User ID is not available.');
      }

      // Agrega el producto al carrito en Supabase
      const { data: insertData, error } = await supabase
        .from('cart_items')
        .insert([{ 
          user_id: user.id, 
          product_id: product.id, 
          quantity: 1 
        }]);

      if (error) {
        console.error('Error adding product to cart:', error.message); 
        throw error;
      } else {
        console.log('Product added to cart in database:', insertData); 
        
        // Si el producto se añade correctamente a la base de datos, también lo añades a `sessionStorage`
        let cartItems = JSON.parse(sessionStorage.getItem('cart_items')) || [];
        cartItems.push({
          product_id: product.id,
          quantity: 1, // o la cantidad que desees
          price: product.price
        });
        sessionStorage.setItem('cart_items', JSON.stringify(cartItems));

        toast({
          title: 'Producto añadido al carrito.',
          description: `El producto ${product.name} ha sido añadido a tu carrito.`,
          status: 'success',
          duration: 5000,
          isClosable: true,
        });
      }
    } catch (error) {
      console.error('Failed to add to cart:', error.message); 
      toast({
        title: 'Error.',
        description: error.message,
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <Button
      colorScheme="blue"
      onClick={handleAddToCart}
      isLoading={loading}
      loadingText="Añadiendo..."
    >
      Añadir al carrito
    </Button>
  );
};


export default AddToCartButton;
