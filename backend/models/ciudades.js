const mongoose =  require('mongoose')

const ciudadesSchema = new mongoose.Schema({
    country:{type:String, required:true},
    city:{type:String, required:true},
    description:{type:String, required:true},
    image:{type:String, required:true},
    date:{type:String, required:true}
})

const Ciudades = mongoose.model('Ciudades', ciudadesSchema)
module.exports = Ciudades