import { useState } from 'react';
import { Box, Button, Text, Textarea, useToast } from '@chakra-ui/react';

export default function Consulta({ consulta }) {
  const [respuesta, setRespuesta] = useState('');
  const toast = useToast();

  const handleSubmit = async () => {
    try {
      const response = await fetch('/api/responder-consulta', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ consultaId: consulta.id, respuesta }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error);
      }

      toast({
        title: 'Respuesta enviada.',
        description: 'Se ha enviado la respuesta al usuario.',
        status: 'success',
        duration: 5000,
        isClosable: true,
      });
    } catch (error) {
      console.error('Error al enviar la respuesta:', error);
      toast({
        title: 'Error.',
        description: 'No se pudo enviar la respuesta.',
        status: 'error',
        duration: 5000,
        isClosable: true,
      });
    }
  };

  if (!consulta) {
    return <Text>Consulta no disponible.</Text>;
  }

  return (
    <Box p={4} shadow="md" borderWidth="1px">
      <Text fontWeight="bold">Consulta:</Text>
      <Text mb={4}>{consulta.consulta}</Text>
      <Textarea
        placeholder="Escribe tu respuesta aquí..."
        value={respuesta}
        onChange={(e) => setRespuesta(e.target.value)}
        mb={4}
      />
      <Button colorScheme="blue" onClick={handleSubmit}>
        Enviar Respuesta
      </Button>
    </Box>
  );
}
