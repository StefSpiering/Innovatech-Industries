import React, { useEffect, useState } from 'react';
import { Box, Button, Input } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

const AddSupplierForm = ({ selectedSupplier, onFormSubmit }) => {
  const [formData, setFormData] = useState({
    name: '',
    contact_info: '',
    address: '',
    phone_number: '',
    email: '',
  });

  useEffect(() => {
    if (selectedSupplier) {
      setFormData({
        name: selectedSupplier.name || '',
        contact_info: selectedSupplier.contact_info || '',
        address: selectedSupplier.address || '',
        phone_number: selectedSupplier.phone_number || '',
        email: selectedSupplier.email || '',
      });
    } else {
      setFormData({
        name: '',
        contact_info: '',
        address: '',
        phone_number: '',
        email: '',
      });
    }
  }, [selectedSupplier]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (selectedSupplier) {
      // Actualizar el proveedor existente
      await supabase
        .from('suppliers')
        .update(formData)
        .eq('id', selectedSupplier.id);
    } else {
      // Agregar un nuevo proveedor
      await supabase.from('suppliers').insert([formData]);
    }

    onFormSubmit();
  };

  return (
    <Box as="form" onSubmit={handleSubmit}>
      <Input
        name="name"
        placeholder="Nombre"
        value={formData.name}
        onChange={handleChange}
        mb={3}
      />
      <Input
        name="contact_info"
        placeholder="Información de Contacto"
        value={formData.contact_info}
        onChange={handleChange}
        mb={3}
      />
      <Input
        name="address"
        placeholder="Dirección"
        value={formData.address}
        onChange={handleChange}
        mb={3}
      />
      <Input
        name="phone_number"
        placeholder="Teléfono"
        value={formData.phone_number}
        onChange={handleChange}
        mb={3}
      />
      <Input
        name="email"
        placeholder="Correo Electrónico"
        value={formData.email}
        onChange={handleChange}
        mb={3}
      />
      <Button type="submit" colorScheme="green">
        {selectedSupplier ? 'Actualizar Proveedor' : 'Agregar Proveedor'}
      </Button>
    </Box>
  );
};

export default AddSupplierForm;
