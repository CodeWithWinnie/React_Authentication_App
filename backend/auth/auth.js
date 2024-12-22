const Boom = require("boom");
const con = require("../config/db");
const bcrypt = require('bcrypt')

const Register = async (req, res, next) => {
   const { username, email, password } = req.body;

   if (!username || !email || !password) {
      return next(Boom.badData(`User data is required: ${username}, ${email}`));
   }

   try {
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);

      const query = `INSERT INTO users (username, email, password) VALUES (?, ?, ?)`;

      // Log the query for debugging
      console.log('Registering user with query:', query);

      con.query(query, [username, email, hashedPassword], (err, result) => {
         if (err) {
            console.error('Database error:', err);

            // Handle duplicate entry error
            if (err.code === 'ER_DUP_ENTRY') {
               return next(Boom.conflict('User with this username or email already exists'));
            }
         
            return next(Boom.badRequest('Error creating user', err));
         }
         res.json({ message: 'User registered successfully', result });
      });
   } catch (err) {
      console.error(err.message);
      next(err);
   }
};



const Login = async (req, res, next) => {
   const {email, password}= req.body

      const query = `SELECT * FROM users WHERE email = ?`
      con.query(query, [email], (err, result) => {
         if(err){
            return next(Boom.notFound("User not found"))
         }
         if(result.length === 0){
            return next(Boom.notFound("User not found"))
         }

         const user = result[0]

         try {
            const isMatch =  bcrypt.compare(password, user.password)
            if(!isMatch){
               return next(Boom.badData('Invalid Credentials'))
            }
            res.json({message: "User Login successfully", result})
         } catch (err) {
            console.error(err)
            next(err)
         }
         
      })
}



module.exports = {Login , Register}