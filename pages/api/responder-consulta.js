
import { supabase } from '../../backend/config';
import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método no permitido' });
  }

  const { consultaId, respuesta } = req.body;

  try {
    // Actualizar la consulta en la base de datos
    const { data, error } = await supabase
      .from('consultas')
      .update({ respuesta: respuesta })
      .eq('id', consultaId)
      .select();

    if (error) {
      throw error;
    }

    if (data.length === 0) {
      return res.status(404).json({ error: 'Consulta no encontrada' });
    }

    const consulta = data[0];

    // Configurar y enviar el correo electrónico con la respuesta
    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'innovatechindustries9@gmail.com', 
        pass: 'rscf nfef emsp ohdc', 
      },
    });

    await transporter.sendMail({
      from: '"Innovatech Industries" <no-reply@innovatech.com>',
      to: consulta.email,
      subject: 'Respuesta a tu consulta',
      text: `Hola ${consulta.nombre_usuario},\n\nGracias por contactarnos. Aquí está nuestra respuesta a tu consulta:\n\n${respuesta}\n\nSaludos,\nEl equipo de Innovatech Industries`,
    });

    res.status(200).json({ message: 'Respuesta enviada y consulta actualizada' });
  } catch (error) {
    console.error('Error al responder la consulta:', error);
    res.status(500).json({ error: 'Error al responder la consulta' });
  }
}
