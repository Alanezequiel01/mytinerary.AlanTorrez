const Itinerarios = require('../models/itinerarios')

const itinerariosController = {

    obtenerItinerarios: async (req, res)=>{
        let itinerarios
        let error = null

        try{
            itinerarios = await Itinerarios.find()
        }catch(err){
            error = err
            console.log(error)
        }
        res.json({
            response: error ? 'ERROR' : {itinerarios}, 
            success: error ? false : true,
            error: error
        })
    },

    obtenerUnItinerario: async (req, res) =>{
        const id = req.params.id

        let itinerario
        let error = null

        try{
            itinerario = await Itinerarios.findOne({_id:id})
        }catch(err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerario,
            success: error ? false : true,
            error: error
        })
    },

    obtenerItinerarioPorId: async (req, res) =>{
        const id = req.params.id

        let itinerario
        let error = null

        try{
            itinerario = await Itinerarios.find({id_city:id})
        }catch(err){
            error = err
        }
        res.json({
            response: error ? 'ERROR' : itinerario,
            success: error ? false : true,
            error: error
        })
    },

}

module.exports = itinerariosController