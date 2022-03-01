const Router = require ('express').Router();

const ciudadesController = require('../controllers/ciudadesController')

const {obtenerCiudades, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController

Router.route('/cities')
.get(obtenerCiudades)
.post(cargarCiudad)


Router.route('/cities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
module.exports = Router