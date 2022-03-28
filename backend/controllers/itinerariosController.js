const Itinerarios = require('../models/itinerarios')

const itinerariosController = {

    obtenerItinerarios: async (req, res) => {
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

        console.log("holaaaaaaaaaaaa")
        

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

    likeDislike:async (req,res) =>{
        const id=req.params.id 
        const user = req.user.id 

       await  Itinerarios.findOne({_id: id})

        .then((itinerario) =>{
            console.log(itinerario)
            if(itinerario.likes.includes(user)){
                Itinerarios.findOneAndUpdate({_id:id}, {$pull:{likes:user}},{new:true})
               .then((response)=> res.json({success:true, response:response.likes}))
               .catch((error) => console.log(error))
            }else{
                Itinerarios.findOneAndUpdate({_id: id}, {$push:{likes:user}},{new:true})
                .then((response) => res.json({success:true, response:response.likes}))
                .catch((error) => console.log(error))
            }
        })
        .catch((error) => res.json({success:false, response:error}))
    },



}

module.exports = itinerariosController