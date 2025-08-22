// Importación de modelos individuales
const Cantante = require("./Cantante");   // Modelo de cantantes
const Evento = require("./Evento");       // Modelo de eventos
const Contacto = require("./Contacto");   // Modelo de contactos

// Exportación centralizada de todos los modelos
// Esto permite importar todos los modelos desde un único archivo:
// Ejemplo: const { Cantante, Evento, Contacto } = require('./models');
module.exports = { Cantante, Evento, Contacto };
