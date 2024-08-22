import { useState, useEffect } from 'react';
import { Box, Text } from '@chakra-ui/react';
import supabase from '../lib/supabaseClient';
import Consulta from './Consulta'; // Asegúrate de que esta ruta es correcta

export default function ConsultaList() {
  const [consultas, setConsultas] = useState([]);

  useEffect(() => {
    async function fetchConsultas() {
      const { data, error } = await supabase
        .from('consultas')
        .select('*');
      if (error) {
        console.error('Error fetching consultas:', error);
      } else {
        setConsultas(data);
      }
    }

    fetchConsultas();
  }, []);

  return (
    <Box>
      {consultas.length > 0 ? (
        consultas.map((consulta) => (
          <Consulta key={consulta.id} consulta={consulta} />
        ))
      ) : (
        <Text>No hay consultas disponibles.</Text>
      )}
    </Box>
  );
}
