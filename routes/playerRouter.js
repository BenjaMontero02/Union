const express = require('express');
const router = express.Router();
const boom = require('@hapi/boom');
const PlayerService = require('../service/playerService');
const validatorHandler = require('../midllewares/validatorHandler');
const { createPlayerSchema, updatePlayerSchema, getPlayerSchema } = require('../schemas/playerSchema');

const service = new PlayerService()

router.get('/', async (req, res, next) => {
  try {
    //obtengo los datos a travez de mi servicio
    const players = await service.getAll();
    //los devuelvo en la res en formato json
    res.json(players);
  } catch (error) {
    //en caso de haber un error lo envio a los middlewares
    next(error);
  }
});

router.get('/:id',
  //esto es un middleware, asi que puedo definir otro middleware antes, que seria la validacion en caso
  // de que la valicion sea correcta sigue avanzando
  validatorHandler(getPlayerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const player = await service.getById(id);
      res.json(player);
    } catch (error) {
      next(error)
    }
})

router.get('/:id/paid-fees',
  validatorHandler(getPlayerSchema, 'params'),
  async (req, res, next) => {
    try {
      const { id } = req.params;
      const player = await service.getById(id);
      res.json(player);
    } catch (error) {
      next(error)
    }
});

router.post('/',
  validatorHandler(createPlayerSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const create = await service.create(body);
      res.send({
        message: 'creado'
      });
    } catch (error) {
      next(error);
    }
});

router.put('/:id',
//valido primero que el id sea un id y despues valido el body
  validatorHandler(getPlayerSchema, 'params'),
  validatorHandler(updatePlayerSchema, 'body'),
    async (req, res, next) => {
      try {
        const {id} = req.params;
        const body = req.body;
        const update  = await service.update(id, body);
        res.status(201).json({
          message: 'updated',
          data: body,
          id: id
        })
      } catch (error) {
        next(error);
      }
  }
);

router.delete('/:id',
  validatorHandler(getPlayerSchema, 'params'),
    async (req, res, next) => {
      try {
        const { id } = req.params;
        const deletePlayer = await service.delete(id);
        res.status(200).json({
          message: 'deleted',
          id: id
        })
      } catch (error) {
        next(error);
      }
});

module.exports = router;
