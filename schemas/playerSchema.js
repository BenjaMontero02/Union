// TAMBIEN SE LE DICE DTO DATA TRANSFER OBJECt

const Joi = require('joi');

const id = Joi.number().id();
const nombre = Joi.string().min(4).max(30);
const apellido = Joi.string().min(4).max(30);
const fecha_nac = Joi.date();
const categoria_id = Joi.number().id();

const createPlayerSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  fecha_nac: fecha_nac.required(),
  categoria_id: categoria_id.required()
})

const updatePlayerSchema = Joi.object({
  nombre: nombre.required(),
  apellido: apellido.required(),
  fecha_nac: fecha_nac.required(),
  categoria_id: categoria_id.required()
})

const getPlayerSchema = Joi.object({
  id: id.required(),
})

module.exports = { createPlayerSchema, updatePlayerSchema, getPlayerSchema }
