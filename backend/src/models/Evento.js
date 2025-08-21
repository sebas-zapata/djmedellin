const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Evento = sequelize.define("Evento", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false,
  },
  lugar: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  descripcion: {
    type: DataTypes.TEXT,
    allowNull: true,
  },
});

module.exports = Evento;
