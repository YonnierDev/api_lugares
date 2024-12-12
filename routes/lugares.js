const express = require("express");
const Lugar = require("../models/Lugar");
const router = express.Router();

// Obtener todos los lugares
router.get("/", async (req, res) => {
  try {
    // Datos de ejemplo si la base de datos está vacía o si quieres probar
    const lugaresEjemplo = [
      {
        _id: "1",
        nombre: "Prints",
        ubicacion:
          "Estamos ubicados en la vía al bosque al frente del conjunto Asturias",
        descripcion: "Comidas Rapidas",
      },
      {
        _id: "2",
        nombre: "Sandunga",
        ubicacion: "Bellavista",
        descripcion: "Discoteca",
      },
      {
        _id: "3",
        nombre: "Rana Club",
        ubicacion: "Glorieta Toscana",
        descripcion: "Bar - Bola y rana",
      },
    ];

    // Aquí simula la obtención de lugares desde la base de datos
    const lugares = lugaresEjemplo; // En un entorno real usarías Lugar.find()

    res.json(lugares);
  } catch (error) {
    console.error("Error al obtener lugares:", error);
    res.status(500).json({ error: "Error al obtener lugares" });
  }
});

// Crear un lugar
// Crear un lugar
router.post("/", async (req, res) => {
  try {
    console.log(req.body); // Esto te permitirá ver los datos que se están enviando
    const nuevoLugar = new Lugar(req.body);
    const lugarGuardado = await nuevoLugar.save();
    res.status(201).json(lugarGuardado);
  } catch (error) {
    console.error(error); // Imprime cualquier error en el servidor
    res.status(400).json({ error: "Error al crear lugar" });
  }
});

module.exports = router;
