var mysql = require('mysql2');
require('dotenv').config()

var con = mysql.createConnection({
      host: process.env.AUTH_HOST,
      user: process.env.AUTH_USER,
      password:process.env.AUTH_PASSWORD,
      database:process.env.AUTH_DB
})
con.connect((err) => {
   if(err){
      console.error(err)
   }else{
      console.log('Connected to Database')
   }
   
})

con.query(
   `CREATE TABLE IF NOT EXISTS users(
   id INT AUTO_INCREMENT PRIMARY_KEY,
   username VARCHAR(50) NOT NULL,
   email VARCHAR(255) NOT NULL UNIQUE,
   password VARCHAR(30) NOT NULL
   )
   `, (err) => {
      if(err){
         console.error('unable to create users table', err)
      }
   }
)


module.exports = con

