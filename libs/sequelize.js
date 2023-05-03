const { Sequelize } = require('sequelize');

const { config } = require('../config/config');
const setUpModels = require('../db/models');

//protego encodeando lo mas importante
const USER = encodeURIComponent(config.dbUser);
const PASSWORD = encodeURIComponent(config.dbPassword);

//lo pongo todo en la uri
const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

const sequelize = new Sequelize(URI, {
  dialect: 'postgres',
  logging:  console.log
})


//levanto los modelos y le paso la conexion
setUpModels(sequelize);

//sincronizo los modelos, si necesito levantar una tabla, si ya estan creadas no es necesario
//sequelize.sync();

module.exports = sequelize;
