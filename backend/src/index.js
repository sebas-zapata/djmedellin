const express = require("express");
const cors = require("cors");
const db = require("./database/db");
const swaggerUi = require("swagger-ui-express");
const swaggerJsDoc = require("swagger-jsdoc");
require('./models')

const app = express();

// Swagger setup
const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    info: {
      title: "API de Eventos",
      version: "1.0.0",
      description: "Documentación de la API para el backend de eventos",
    },
    servers: [
      {
        url: "http://localhost:4000",
      },
    ],
  },
  apis: ["./src/routes/*.js"],
};

const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

// Middlewares
app.use(cors());
app.use(express.json());

// Importar rutas
app.use("/api/cantantes", require("./routes/cantanteRoutes"));
app.use("/api/eventos", require("./routes/eventos"));
app.use("/api/contacto", require("./routes/contacto"));

// Middleware para manejo de errores
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Error interno del servidor" });
});

// Sincronizar modelos con la base de datos
db.sync({ alter: true })
  .then(() => {
    console.log("✅ Tablas sincronizadas con la base de datos");

    // Iniciar servidor solo si DB está lista
    const PORT = 4000;
    app.listen(PORT, () => {
      console.log(`Servidor corriendo en http://localhost:${PORT}`);
      console.log(`Documentación disponible en http://localhost:${PORT}/api-docs`);
    });
  })
  .catch(err => {
    console.error("❌ Error al sincronizar tablas:", err);
  });
