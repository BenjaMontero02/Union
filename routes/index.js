const playerRouter = require('./playerRouter');
const userRouter = require('./userRouter');

function routerApi(app){
  app.use('/api/player', playerRouter);
  app.use('/api/user', userRouter);
}

module.exports = routerApi;
