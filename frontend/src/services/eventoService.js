// Importar Axios para consumir el servicio de eventos
import axios from 'axios';

// Definir la URL de eventos
const API_URL = "http://localhost:4000/api/eventos";

// Servicio para obtener todos los eventos
export const getEventos = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};