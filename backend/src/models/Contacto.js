const { DataTypes } = require("sequelize");
const sequelize = require("../database/db");

const Contacto = sequelize.define("Contacto", {
  nombre: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: true,
    },
  },
  mensaje: {
    type: DataTypes.TEXT,
    allowNull: false,
  },
});

module.exports = Contacto;
