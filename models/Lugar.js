// models/Lugar.js
const mongoose = require("mongoose");

// Definir el esquema para el lugar
const LugarSchema = new mongoose.Schema({
  nombre: {
    type: String, // El nombre del lugar debe ser una cadena de texto
    required: true, // El campo es obligatorio
  },
  descripcion: {
    type: String, // La descripción del lugar debe ser una cadena de texto
    required: true, // El campo es obligatorio
  },
  categoria: {
    type: String, // La categoría del lugar (ej. discoteca, restaurante, etc.)
    required: false, // Este campo no es obligatorio
  },
  imagen: {
    type: String, // La URL de la imagen se almacenará como una cadena de texto
    required: false, // Este campo no es obligatorio
  },
  calificacion: {
    type: Number, // La calificación es un número
    min: 0, // Mínimo valor de la calificación
    max: 5, // Máximo valor de la calificación
    default: 0, // Valor por defecto si no se proporciona
  },
  precio: {
    type: String, // El precio se almacena como una cadena de texto (puede incluir símbolos de moneda)
    required: false, // Este campo no es obligatorio
  },
});

// Crear y exportar el modelo basado en el esquema definido
module.exports = mongoose.model("Lugar", LugarSchema);
