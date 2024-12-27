require('dotenv').config()
const bodyParser = require('body-parser')
const express = require('express')
const router = require('./routes/index')
const app = express()

app.use(cors({
    origin: 'http://localhost:3000', // Frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE'], // Allowed methods
    credentials: true // If you need to send cookies or auth headers
}));
//middleware for app
app.use(express.json())
app.use(bodyParser.json())


// routes for database
app.use('/api', router)

// internal error handling
app.use((err, req, res, next) => {
   next(err)
 
   if(err){
     return res.status(err.output.statusCode || 500).json(err.output.payload)
   }
 
   return res.status(500).json(err)
 })
//server connection
const Port = process.env.Port || 3001
app.listen(Port, () => {
   console.log('Server is up!')
} )
