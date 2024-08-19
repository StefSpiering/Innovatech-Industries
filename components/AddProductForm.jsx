import { useState, useEffect } from 'react';
import { Button, Input, FormControl, FormLabel, Box, useToast, Select } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

const AddProductForm = () => {
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

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data: product, error: insertError } = await supabase
      .from('products')
      .insert([{ 
        name, 
        description, 
        price, 
        supplier_id: supplierId 
      }]);

    if (insertError) {
      toast({
        title: 'Insert error.',
        description: insertError.message,
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
      return;
    }

    toast({
      title: 'Product added.',
      description: 'The product has been added successfully!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

    // Reset form
    setName('');
    setDescription('');
    setPrice('');
    setSupplierId('');
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
          Add Product
        </Button>
      </form>
    </Box>
  );
};

export default AddProductForm