import React, { useEffect, useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, Select, useToast } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

const AddProductForm = ({ selectedProduct, onFormSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState('');
  const [supplierId, setSupplierId] = useState('');
  const [suppliers, setSuppliers] = useState([]);
  const toast = useToast();

  useEffect(() => {
    const fetchSuppliers = async () => {
      const { data, error } = await supabase
        .from('suppliers')
        .select('id, name');

      if (error) {
        toast({
          title: 'Error fetching suppliers.',
          description: error.message,
          status: 'error',
          duration: 9000,
          isClosable: true,
        });
        return;
      }

      setSuppliers(data);
    };

    fetchSuppliers();
  }, [toast]);

  useEffect(() => {
    if (selectedProduct) {
      setName(selectedProduct.name);
      setDescription(selectedProduct.description);
      setPrice(selectedProduct.price);
      setSupplierId(selectedProduct.supplier_id);
    } else {
      // Limpiar el formulario si no hay producto seleccionado
      setName('');
      setDescription('');
      setPrice('');
      setSupplierId('');
    }
  }, [selectedProduct]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (selectedProduct) {
        // Editar producto existente
        const { error: updateError } = await supabase
          .from('products')
          .update({
            name,
            description,
            price,
            supplier_id: supplierId
          })
          .eq('id', selectedProduct.id);

        if (updateError) throw updateError;

        toast({
          title: 'Product updated.',
          description: 'The product has been updated successfully!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      } else {
        // Agregar un nuevo producto
        const { error: insertError } = await supabase
          .from('products')
          .insert([{ name, description, price, supplier_id: supplierId }]);

        if (insertError) throw insertError;

        toast({
          title: 'Product added.',
          description: 'The product has been added successfully!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      }

      // Resetear el formulario y notificar al componente padre
      onFormSubmit();
    } catch (error) {
      toast({
        title: 'Error.',
        description: error.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <FormControl isRequired>
          <FormLabel>Name</FormLabel>
          <Input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Description</FormLabel>
          <Input
            type="text"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Price</FormLabel>
          <Input
            type="number"
            step="0.01"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Supplier</FormLabel>
          <Select
            placeholder="Select supplier"
            value={supplierId}
            onChange={(e) => setSupplierId(e.target.value)}
          >
            {suppliers.map((supplier) => (
              <option key={supplier.id} value={supplier.id}>
                {supplier.name}
              </option>
            ))}
          </Select>
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          mt={4}
        >
          {selectedProduct ? 'Update Product' : 'Add Product'}
        </Button>
      </form>
    </Box>
  );
};

export default AddProductForm;
