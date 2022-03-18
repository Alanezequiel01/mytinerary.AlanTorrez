const Router = require ('express').Router();
const validator = require ('../config/validator')
const passport = require ('../config/passport')

const ciudadesController = require('../controllers/ciudadesController')
const itinerariosController = require('../controllers/itinerariosController')
const userController = require('../controllers/userController')

const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController
const {obtenerItinerarios, obtenerUnItinerario, obtenerItinerarioPorId} = itinerariosController
const {signUpUser, signInUser, signOutUser, verifyEmail, verifyToken} = userController

//Routes to cities
Router.route('/cities')
.get(obtenerCiudades)
.post(cargarCiudad)

Router.route('/cities/:id')
.delete(borrarCiudad)
.put(modificarCiudad)
.get(obtenerUnaCiudad)

//Routes to itineraries
Router.route('/itineraries')
.get(obtenerItinerarios)

Router.route('/itineraries/:id')
.get(obtenerItinerarioPorId)

//Routes to users
Router.route('/auth/signUp')
.post(validator, signUpUser)

Router.route('/auth/signIn')
.post(signInUser)

Router.route('/auth/signOut')
.post(signOutUser)

/* Routes for validation */
Router.route('/verify/:uniqueString') 
.get(verifyEmail)

/* Routes for token */
Router.route('/auth/signInToken')
.get(passport.authenticate('jwt', {session: false}), verifyToken)
module.exports = Router