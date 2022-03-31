require('dotenv').config()
const cors = require('cors')
const express = require('express')
require('./config/database')
const passport = require('passport')
const path = require('path')
const PORT = process.env.PORT ||4000
const HOST = process.env.HOST ||"0.0.0.0"

const Router = require('./routes/routes')


const app = express()

//middlewares
app.use(cors())
app.use(express.json())
app.use(passport.initialize())
app.use('/api/V1', Router)

if (process.env.NODE_ENV === "production") {
    app.use(express.static('client/build'))
    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname + '/client/build/index.html'))
    })
}

app.listen(PORT, HOST,()=>console.log("Server ready on PORT " + PORT))