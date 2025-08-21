const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Cantante = sequelize.define("Cantante", {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  genero: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
  },
  foto: {
    type: DataTypes.STRING, 
  },
}, {
  timestamps: true,
});

module.exports = Cantante;
