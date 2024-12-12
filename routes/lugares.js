// routes/lugares.js
const express = require("express"); // Importar Express para crear las rutas
const Lugar = require("../models/Lugar"); // Importar el modelo de Lugar
const router = express.Router(); // Crear un router de Express

// Ruta GET para obtener todos los lugares
router.get("/", async (req, res) => {
  try {
    // Buscar todos los lugares en la base de datos
    const lugares = await Lugar.find();
    // Responder con los lugares encontrados en formato JSON
    res.json(lugares);
  } catch (error) {
    // Si ocurre un error, se envía un código de error 500 (interno del servidor)
    console.error("Error al obtener lugares:", error);
    res.status(500).json({ error: "Error al obtener lugares" });
  }
});

// Ruta POST para crear un nuevo lugar
router.post("/", async (req, res) => {
  try {
    // Aquí imprimimos los datos recibidos en el cuerpo de la solicitud
    console.log(req.body);

    // Crear una nueva instancia del modelo Lugar con los datos enviados en el cuerpo
    const nuevoLugar = new Lugar(req.body);

    // Guardar el lugar en la base de datos
    const lugarGuardado = await nuevoLugar.save();

    // Responder con el lugar recién guardado y un código de estado 201 (creado)
    res.status(201).json(lugarGuardado);
  } catch (error) {
    // Si ocurre un error durante la creación, respondemos con un código de error 400 (mala solicitud)
    console.error("Error al crear lugar:", error);
    res.status(400).json({ error: "Error al crear lugar" });
  }
});

// Exportar las rutas para que sean utilizadas en el archivo principal
module.exports = router;
