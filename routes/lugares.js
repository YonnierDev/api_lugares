// routes/lugares.js
const express = require("express");
const Lugar = require("../models/Lugar");
const router = express.Router();

// Obtener todos los lugares
router.get("/", async (req, res) => {
  try {
    const lugares = await Lugar.find(); // Obtener lugares de la base de datos
    res.json(lugares);
  } catch (error) {
    console.error("Error al obtener lugares:", error);
    res.status(500).json({ error: "Error al obtener lugares" });
  }
});

// Crear un lugar
router.post("/", async (req, res) => {
  try {
    console.log(req.body); // Ver los datos que se están enviando
    const nuevoLugar = new Lugar(req.body);
    const lugarGuardado = await nuevoLugar.save();
    res.status(201).json(lugarGuardado);
  } catch (error) {
    console.error(error); // Imprime cualquier error
    res.status(400).json({ error: "Error al crear lugar" });
  }
});

module.exports = router;
