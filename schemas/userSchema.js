const Joi = require('joi');

const id = Joi.number().id();
const email = Joi.string().min(4).email();
const password = Joi.string().min(8);
const rol = Joi.number();

const createUserSchema = Joi.object({
  email: email.required(),
  password : password.required(),
  rol : rol.required()
});

const getUserSchema = Joi.object({
  id: id.required()
});

module.exports = { createUserSchema, getUserSchema };
