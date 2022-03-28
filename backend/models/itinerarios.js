const mongoose =  require('mongoose')

const itinerariosSchema = new mongoose.Schema({
    username:{type:String, required:true},
    image:{type:String, required:true},
    price:{type:Number, required:true},
    duration:{type:String, required:true},
    hashtags:{type:Array, required:true},
    likes:{type:Array},
    comments: [{
        comment: {type:String},
        userId: {type:mongoose.Types.ObjectId, ref:"Usuarios"}
    }],
    id_city:{type: mongoose.Types.ObjectId, ref: "Ciudades"}

})

const Itinerarios = mongoose.model('Itinerarios', itinerariosSchema)
module.exports = Itinerarios