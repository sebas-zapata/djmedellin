const express = require("express"); // Framework para construir APIs HTTP
const cors = require("cors"); // Middleware para habilitar Cross-Origin Resource Sharing
const db = require("./database/db"); // Configuración y conexión de la base de datos (Sequelize)
const swaggerUi = require("swagger-ui-express"); // UI interactiva para documentación de API
const swaggerJsDoc = require("swagger-jsdoc"); // Genera documentación Swagger desde comentarios JSDoc
require('./models'); // Carga los modelos Sequelize para registro en la conexión de DB

const app = express(); // Inicializa la aplicación Express

// --------------------
// Configuración de Swagger (documentación de la API)
// --------------------
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0", // Versión OpenAPI
    info: {
      title: "API de Eventos", // Título de la API
      version: "1.0.0", // Versión actual de la API
      description: "Documentación de la API para el backend de eventos", // Breve descripción
    },
    servers: [
      { url: "http://localhost:4000" }, // URL base del servidor
    ],
  },
  apis: ["./src/routes/*.js"], // Archivos donde Swagger busca comentarios JSDoc para generar rutas y modelos
};

const swaggerDocs = swaggerJsDoc(swaggerOptions); // Genera la documentación a partir de swaggerOptions
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs)); // Expone la UI de Swagger en /api-docs

// --------------------
// Middlewares globales
// --------------------
app.use(cors()); // Permite solicitudes desde cualquier origen
app.use(express.json()); // Parseo automático de cuerpos JSON en las solicitudes

// --------------------
// Rutas de la API
// --------------------
app.use("/api/cantantes", require("./routes/cantanteRoutes")); // CRUD de cantantes
app.use("/api/eventos", require("./routes/eventos")); // CRUD de eventos
app.use("/api/contacto", require("./routes/contacto")); // Gestión de contactos

// --------------------
// Manejo global de errores
// --------------------
app.use((err, req, res, next) => {
  console.error(err.stack); // Log de errores detallado para debugging
  res.status(500).json({ error: "Error interno del servidor" }); // Respuesta genérica al cliente
});

// --------------------
// Sincronización de modelos con la base de datos
// --------------------
db.sync({ alter: true }) // Sincroniza tablas y realiza cambios automáticos sin perder datos
  .then(() => {
    console.log("✅ Tablas sincronizadas con la base de datos");

    // --------------------
    // Arranque del servidor
    // --------------------
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch(err => {
    console.error("❌ Error al sincronizar tablas:", err); // Manejo de errores de DB
  });
