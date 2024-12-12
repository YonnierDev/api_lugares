// server.js
const express = require("express"); // Importar Express para crear el servidor
const mongoose = require("mongoose"); // Importar Mongoose para la conexión con MongoDB
const dotenv = require("dotenv"); // Importar dotenv para manejar variables de entorno
const lugaresRoutes = require("./routes/lugares"); // Importar las rutas de lugares

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express(); // Crear una instancia de la aplicación Express

// Configuración del puerto. Render asigna un puerto dinámico, por eso usamos process.env.PORT
// Si no se encuentra un puerto asignado, usamos el puerto 3000 como valor por defecto
const PORT = process.env.PORT || 3000;

// Middleware para manejar solicitudes con formato JSON
app.use(express.json());

// Definir las rutas de la API, en este caso, "/api/lugares"
app.use("/api/lugares", lugaresRoutes);

// Conectar a la base de datos MongoDB utilizando la URI desde las variables de entorno
mongoose
  .connect(process.env.MONGO_URI) // Conexión usando la URI de la base de datos de MongoDB
  .then(() => {
    console.log("Conectado a la base de datos");

    // Iniciar el servidor en el puerto configurado
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
    });
  })
  .catch((error) => {
    // Si hay un error al conectar con la base de datos, se muestra el error en consola
    console.error("Error al conectar a la base de datos:", error);
  });
