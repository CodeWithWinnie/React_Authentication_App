require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const router = require('./routes/index')
const app = express()


//middleware for app
app.use(express.json())
app.use(bodyParser.json())


// routes for database
app.use('/api', router)


//server connection
const Port = process.env.Port || 3001
app.listen(Port, () => {
   console.log('Server is up!')
} )