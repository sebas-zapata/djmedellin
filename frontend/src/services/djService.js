// Importar Axios para consumir el servicio de djs
import axios from 'axios';

// Definir la URL de djs
const API_URL = "http://localhost:4000/api/cantantes";

// Servicio para obtener todos los djs
export const getDjs = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

// Servicio para obtener un dj por su ID
export const getDjById = async (id) => {
  try {
    const response = await axios.get(`${API_URL}/${id}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching DJ by ID:', error);
    throw error;
  }
};