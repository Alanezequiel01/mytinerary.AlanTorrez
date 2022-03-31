const mongoose =  require('mongoose')

const actividadesSchema = new mongoose.Schema({
   title: { type: String, required: true },
   image: { type: String, required: true },
   id_itinerary: { type: mongoose.Types.ObjectId, ref: "Itinerarios", required:true},
})

const Actividades = mongoose.model("Actividades", actividadesSchema)

module.exports = Actividades
