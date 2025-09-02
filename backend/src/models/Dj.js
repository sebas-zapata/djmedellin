const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Dj = sequelize.define("Dj", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  slug: {
    type: DataTypes.STRING,
    unique: true,
    allowNull: false,
  },
  nombreReal: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  biografia: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
  fotoPerfil: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  portada: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  generos: {
    type: DataTypes.ARRAY(DataTypes.STRING),
    defaultValue: [],
  },
  redesSociales: {
    type: DataTypes.JSONB,
    defaultValue: {},
  },
  email: {
    type: DataTypes.STRING,
    allowNull: true,
    validate: {
      isEmail: true,
    },
  },
  telefono: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  pais: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  ciudad: {
    type: DataTypes.STRING,
    allowNull: true,
  },
  destacado: {
    type: DataTypes.BOOLEAN,
    defaultValue: false,
  },
  activo: {
    type: DataTypes.BOOLEAN,
    defaultValue: true,
  },
}, {
  timestamps: true,
  paranoid: true,
});

module.exports = Dj;
