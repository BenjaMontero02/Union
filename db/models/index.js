//me traigo todos los modelos que quiera

const { User, UserSchema } = require('./userModel');

//levanto todos los modelos que tengo
function setUpModels(sequelize){
  //modelo, tiene que tener tal esquema y llamo a la configuracion
  User.init(UserSchema, User.config(sequelize));
}

module.exports = setUpModels
