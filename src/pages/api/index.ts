// api/backend.ts
import { NextApiRequest, NextApiResponse } from 'next';
import dotenv from 'dotenv';
dotenv.config();


const endpoint: string = `${process.env.FLASK_APP_API}/`; 

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  try {
    // Realizar la solicitud al endpoint de tu backend
    const response = await fetch(endpoint);
    // Convertir la respuesta a formato JSON
    const jsonData = await response.json();

    res.status(200).json(jsonData);
  } catch (error) {
    console.error('Error al hacer la solicitud GraphQL:', error);
    res.status(500).json({ mensaje: 'Error interno del servidor' });
  }
}
