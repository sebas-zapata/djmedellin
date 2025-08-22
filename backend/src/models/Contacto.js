const { DataTypes } = require("sequelize"); // Importa los tipos de datos de Sequelize
const sequelize = require("../database/db"); // Importa la instancia de Sequelize conectada a la DB

// Definición del modelo 'Contacto'
const Contacto = sequelize.define(
  "Contacto", // Nombre del modelo (Sequelize lo pluraliza automáticamente para la tabla)
  {
    nombre: {
      type: DataTypes.STRING, // Campo de texto para el nombre del contacto
      allowNull: false,       // Obligatorio
    },
    email: {
      type: DataTypes.STRING, // Campo de texto para el correo electrónico
      allowNull: false,       // Obligatorio
      validate: {
        isEmail: true,        // Valida automáticamente que tenga formato de correo electrónico
      },
    },
    mensaje: {
      type: DataTypes.TEXT,   // Campo de texto largo para el mensaje del contacto
      allowNull: false,       // Obligatorio
    },
  }
  // Por defecto Sequelize agrega createdAt y updatedAt si no se especifica lo contrario
);

module.exports = Contacto; // Exporta el modelo para usarlo en controladores o inicialización
