const Joi = require("joi");

const userValidation = Joi.object({
   username: Joi.string(),
   email: Joi.string().required(),
   password: Joi.string().min(7).required().message('Password must be 7 characters')
})

module.exports = userValidation