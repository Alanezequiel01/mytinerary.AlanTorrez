const Actividades = require("../models/actividades")

const actividadesController = {
   obtenerActividades: async (req, res) => {
    let actividades
    let error = null

    try{
        actividades = await Actividades.find()
    }catch(err){
        error = err
        console.log(error)
    }
    res.json({
        response: error ? 'ERROR' : {actividades}, 
        success: error ? false : true,
        error: error
    })
   },

   obtenerActividadPorId: async (req, res) =>{
    const id = req.params.id

    let actividad
    let error = null

    try{
        actividad = await Actividades.find({id_itinerary:id})
    }catch(err){
        error = err
    }
    res.json({
        response: error ? 'ERROR' : actividad,
        success: error ? false : true,
        error: error
    })
},
}

module.exports = actividadesController
