require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./config/database')
const passport = require('passport')

const Router = require('./routes/routes')
const PORT = 4000

const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api/V1', Router)

app.listen(PORT,()=>console.log("Server ready on PORT " + PORT))