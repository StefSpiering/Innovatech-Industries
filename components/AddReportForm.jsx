import React, { useEffect, useState } from 'react';
import { Box, Button, Input, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';

const AddReportForm = ({ selectedReport, onFormSubmit }) => {
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [date, setDate] = useState('');
  const [excelFileUrl, setExcelFileUrl] = useState('');
  const toast = useToast();

  useEffect(() => {
    if (selectedReport) {
      setName(selectedReport.name);
      setDescription(selectedReport.description);
      setDate(selectedReport.date);
      setExcelFileUrl(selectedReport.excel_file_url);
    } else {
      // Limpiar el formulario si no hay reporte seleccionado
      setName('');
      setDescription('');
      setDate('');
      setExcelFileUrl('');
    }
  }, [selectedReport]);

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      if (selectedReport) {
        // Editar reporte existente
        const { error: updateError } = await supabase
          .from('reports')
          .update({
            name,
            description,
            date,
            excel_file_url: excelFileUrl
          })
          .eq('id', selectedReport.id);

        if (updateError) throw updateError;

        toast({
          title: 'Report updated.',
          description: 'The report has been updated successfully!',
          status: 'success',
          duration: 9000,
          isClosable: true,
        });
      } else {
        // Agregar un nuevo reporte
        const { error: insertError } = await supabase
          .from('reports')
          .insert([{ name, description, date, excel_file_url: excelFileUrl }]);

        if (insertError) throw insertError;

        toast({
          title: 'Report added.',
          description: 'The report has been added successfully!',
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
          <FormLabel>Date</FormLabel>
          <Input
            type="date"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </FormControl>

        <FormControl mt={4}>
          <FormLabel>Excel File URL</FormLabel>
          <Input
            type="url"
            value={excelFileUrl}
            onChange={(e) => setExcelFileUrl(e.target.value)}
          />
        </FormControl>
        

        <Button
          type="submit"
          colorScheme="green"
          mt={4}
         
        >
          {selectedReport ? 'Update Report' : 'Add Report'}
        </Button>
        
      </form>
    </Box>
  );
};

export default AddReportForm;
