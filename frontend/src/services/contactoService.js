// Importar axios para consumir el servicio de Contactos
import axios from "axios";

// Definir la URL de la API Contacto
const API_URL = "http://localhost:4000/api/contacto";

// Definir la función para enviar el mensaje
export const enviarMensaje = async (formData) => {
  try {
    const response = await axios.post(API_URL, formData);
    return response.data;
  } catch (error) {
    throw error;
  }
};
