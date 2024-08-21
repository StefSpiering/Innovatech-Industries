import { useState } from 'react';
import { Button, Input, FormControl, FormLabel, Box, useToast } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

const AddSupplierForm = () => {
  const [name, setName] = useState('');
  const [contactInfo, setContactInfo] = useState('');
  const [address, setAddress] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const toast = useToast();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const { data: supplier, error: insertError } = await supabase
      .from('suppliers')
      .insert([{ 
        name, 
        contact_info: contactInfo, 
        address, 
        phone_number: phoneNumber, 
        email 
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
      title: 'Supplier added.',
      description: 'The supplier has been added successfully!',
      status: 'success',
      duration: 9000,
      isClosable: true,
    });

    // Reset form
    setName('');
    setContactInfo('');
    setAddress('');
    setPhoneNumber('');
    setEmail('');
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
          <FormLabel>Contact Info</FormLabel>
          <Input
            type="text"
            value={contactInfo}
            onChange={(e) => setContactInfo(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Address</FormLabel>
          <Input
            type="text"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Phone Number</FormLabel>
          <Input
            type="text"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          colorScheme="teal"
          mt={4}
        >
          Add Supplier
        </Button>
      </form>
    </Box>
  );
};

export default AddSupplierForm;
