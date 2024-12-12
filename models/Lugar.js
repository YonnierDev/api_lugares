// models/Lugar.js
const mongoose = require("mongoose");

const LugarSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String },
  imagen: { type: String }, // Aquí almacenarás la URL de la imagen
  calificacion: { type: Number, min: 0, max: 5, default: 0 }, // Calificación con valor por defecto
  precio: { type: String },
});

module.exports = mongoose.model("Lugar", LugarSchema);
