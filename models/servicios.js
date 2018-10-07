var mongoose    = require("mongoose");

var servicioSchema = new mongoose.Schema({
    categoria: String,
    subcategoria: String,
    descripcion: String,
    precio: Number
})

var Servicio = mongoose.model("Servicio", servicioSchema);

module.exports = Servicio;