const Router = require ('express').Router();
const validator = require ('../config/validator')
const passport = require ('../config/passport')

const ciudadesController = require('../controllers/ciudadesController')
const itinerariosController = require('../controllers/itinerariosController')
const userController = require('../controllers/userController')
const actividadesController = require('../controllers/actividadesController')
const comentariosController = require('../controllers/comentariosController')

const {obtenerCiudades, obtenerUnaCiudad, cargarCiudad, borrarCiudad, modificarCiudad} = ciudadesController
const {obtenerItinerarios, obtenerUnItinerario, obtenerItinerarioPorId, likeDislike} = itinerariosController
const {signUpUser, signInUser, signOutUser, verifyEmail, verifyToken} = userController
const {obtenerActividades, obtenerActividadPorId} = actividadesController
const {addComment, modifiComment, deleteComment} = comentariosController

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

/* Routes for activities */
Router.route("/activities")
.get(obtenerActividades)

Router.route("/activities/:id")
.get(obtenerActividadPorId)

/* Routes for likes */
Router.route("/like/:id")
.put(passport.authenticate("jwt", {session: false}), likeDislike)

/* Routes for Comments */
Router.route('/comment')
.post(passport.authenticate("jwt",{ session: false }),addComment)
.put(passport.authenticate("jwt",{ session: false }),modifiComment)

Router.route('/comment/:id')
.post(passport.authenticate("jwt",{ session: false }),deleteComment)

