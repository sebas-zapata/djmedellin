const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("djmedellin_db", "root", "", {
  host: "localhost",
  dialect: "mysql"
});

async function connectDB() {
  try {
    await sequelize.authenticate();
    console.log("✅ Conectado a la base de datos");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error);
  }
}

connectDB();

module.exports = sequelize;
