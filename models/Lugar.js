const mongoose = require("mongoose");

const LugarSchema = new mongoose.Schema({
  nombre: { type: String, required: true },
  descripcion: { type: String, required: true },
  categoria: { type: String },
  imagen: { type: String },
  calificacion: { type: Number, min: 0, max: 5 },
  precio: { type: String },
});

module.exports = mongoose.model("Lugar", LugarSchema);
