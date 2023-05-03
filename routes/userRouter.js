const express = require('express');
const router = express.Router();
const UserService = require('../service/userService');
const validatorHandler = require('../midllewares/validatorHandler');
const { creatUserSchema, getUserSchema } = require('../schemas/userSchema');

const service = new UserService();

router.get('/', async (req, res, next) => {
  try {
    const users = await service.getAll();
    res.json(users);
  }catch(error){
    next(error);
  }
});

router.get('/:id',
validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const user = await service.getById(id);
      res.json(user);
    } catch (error) {
      next(error);
    }
  }
)

router.put('/:id',
validatorHandler(getUserSchema, 'params'),
validatorHandler(creatUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const body = req.body;
      const user = await service.update(id, body);
    } catch (error) {
      next(error);
    }
  }
)

router.post('/',
validatorHandler(creatUserSchema, 'body'),
  async (req, res, next) => {
    try {
      const body = req.body;
      const user = await service.create(body);
    } catch (error) {
      next(error);
    }
  }
)

router.delete('/:id',
validatorHandler(getUserSchema, 'params'),
  async (req, res, next) => {
    try {
      const {id} = req.params;
      const user = await service.delete(id);
    } catch (error) {
      next(error);
    }
  }
)


module.exports = router
