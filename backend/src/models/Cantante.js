const { DataTypes } = require("sequelize"); // Importa los tipos de datos que Sequelize soporta
const sequelize = require("../database/db"); // Importa la instancia de Sequelize configurada con la DB

// Definición del modelo 'Cantante'
const Cantante = sequelize.define(
  "Cantante", // Nombre del modelo (Sequelize lo pluraliza automáticamente para la tabla)
  {
    id: {
      type: DataTypes.INTEGER, // Tipo de dato entero
      autoIncrement: true,     // Se incrementa automáticamente al insertar registros
      primaryKey: true,        // Clave primaria de la tabla
    },
    nombre: {
      type: DataTypes.STRING,  // Cadena de texto
      allowNull: false,        // Campo obligatorio
    },
    genero: {
      type: DataTypes.STRING,  // Cadena de texto para el género musical
      allowNull: false,        // Campo obligatorio
    },
    descripcion: {
      type: DataTypes.TEXT,    // Texto largo, para descripción opcional del cantante
      // allowNull por defecto es true, por eso es opcional
    },
    foto: {
      type: DataTypes.STRING,  // URL o nombre del archivo de la foto del cantante
      // Campo opcional
    },
  },
  {
    timestamps: true, // Crea automáticamente los campos createdAt y updatedAt
  }
);

module.exports = Cantante; // Exporta el modelo para usarlo en otros módulos
