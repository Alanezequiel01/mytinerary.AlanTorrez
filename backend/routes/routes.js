const Router = require ('express').Router();

const ciudadesController = require('../controllers/ciudadesController')
const itinerariosController = require('../controllers/itinerariosController')

const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController
const {obtenerItinerarios, obtenerUnItinerario, obtenerItinerarioPorId} = itinerariosController

//Rutas para cities
Router.route('/cities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/cities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)

//Rutas para itinerarios
Router.route('/itineraries')
.get(obtenerItinerarios)

Router.route('/itineraries/:id')
.get(obtenerItinerarioPorId)

module.exports = Router