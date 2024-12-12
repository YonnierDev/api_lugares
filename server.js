const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const lugaresRoutes = require("./routes/lugares");

// Cargar las variables de entorno desde el archivo .env
dotenv.config();

const app = express();

// Configuración del puerto. Render asigna un puerto dinámico, por eso usamos process.env.PORT
// Si no se encuentra un puerto asignado, usa 3000 como valor por defecto
const PORT = process.env.PORT || 3000;

// Middleware para manejar las solicitudes con formato JSON
app.use(express.json());

// Definir las rutas para la API
app.use("/api/lugares", lugaresRoutes);

// Conexión a la base de datos MongoDB usando la URI almacenada en las variables de entorno
mongoose
  .connect(process.env.MONGO_URI) // Se eliminan las opciones deprecated: useNewUrlParser y useUnifiedTopology
  .then(() => {
    console.log("Conectado a la base de datos");

    // Iniciar el servidor en el puerto definido (usando 0.0.0.0 para hacer que sea accesible desde cualquier interfaz)
    app.listen(PORT, "0.0.0.0", () => {
      console.log(`Servidor corriendo en http://0.0.0.0:${PORT}`);
    });
  })
  .catch((error) =>
    console.error("Error al conectar a la base de datos:", error)
  );
