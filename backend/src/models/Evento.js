const { DataTypes } = require("sequelize"); // Importa los tipos de datos de Sequelize
const sequelize = require("../database/db"); // Importa la instancia de Sequelize conectada a la base de datos

// Definición del modelo 'Evento'
const Evento = sequelize.define(
  "Evento", // Nombre del modelo (Sequelize pluraliza automáticamente a 'Eventos' para la tabla)
  {
    nombre: {
      type: DataTypes.STRING, // Nombre del evento
      allowNull: false,       // Obligatorio
    },
    fecha: {
      type: DataTypes.DATE,   // Fecha y hora del evento
      allowNull: false,       // Obligatorio
    },
    lugar: {
      type: DataTypes.STRING, // Ubicación del evento
      allowNull: false,       // Obligatorio
    },
    descripcion: {
      type: DataTypes.TEXT,   // Descripción detallada del evento
      allowNull: true,        // Opcional
    },
  }
  // Sequelize agrega automáticamente createdAt y updatedAt si no se especifica lo contrario
);

module.exports = Evento; // Exporta el modelo para usarlo en controladores o en la inicialización de la base de datos
