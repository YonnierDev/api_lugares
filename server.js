const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const lugaresRoutes = require("./routes/lugares");

// Cargar las variables de entorno
dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(express.json());

// Rutas
app.use("/api/lugares", lugaresRoutes);

// Conexión a la base de datos
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Conectado a la base de datos");
    app.listen(PORT, () =>
      console.log(`Servidor corriendo en http://localhost:${PORT}`)
    );
  })
  .catch((error) =>
    console.error("Error al conectar a la base de datos:", error)
  );