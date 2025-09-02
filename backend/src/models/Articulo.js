const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Articulo = sequelize.define("Articulo", {
  titulo: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  contenido: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
  resumen: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  imagenPortada: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  etiquetas: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  categoria: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'general',
  },
  estado: {
    type: DataTypes.ENUM('borrador', 'revision', 'publicado', 'archivado'),
    defaultValue: 'borrador',
  },
  publicadoEn: {
    type: DataTypes.DATE,
    allowNull: true,
  },
  // Relaciones
  autorId: {
    type: DataTypes.INTEGER,
    references: {
      model: 'Usuarios',
      key: 'id',
    },
    allowNull: false,
  },
}, {
  timestamps: true,
  paranoid: true,
});

module.exports = Articulo;
