const { Sequelize } = require("sequelize"); 
// Importa la clase Sequelize para manejar la conexión y modelos con la base de datos

// --------------------
// Configuración de la conexión
// --------------------
const sequelize = new Sequelize(
  "djmedellin_db", // Nombre de la base de datos
  "root",          // Usuario de la base de datos
  "root",              // Contraseña del usuario
  {
    host: "localhost", // Servidor donde corre la DB
    dialect: "mysql",  // Motor de base de datos
    logging: false,    // Deshabilita logs SQL en consola (opcional)
  }
);

// --------------------
// Función para probar la conexión
// --------------------
async function connectDB() {
  try {
    await sequelize.authenticate(); // Intenta autenticar la conexión
    console.log("✅ Conectado a la base de datos");
  } catch (error) {
    console.error("❌ Error al conectar a la base de datos:", error);
  }
}

// Ejecuta la prueba de conexión
connectDB();

// Exporta la instancia de Sequelize para usarla en los modelos
module.exports = sequelize;
