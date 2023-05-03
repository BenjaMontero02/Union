const { Model, DataTypes, Sequelize} = require("sequelize");

const USER_TABLE = 'users';

//creo el modelo de user
const UserSchema = {
  userId: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    field: 'user_id',
    type : DataTypes.INTEGER
  },

  email: {
    allowNull: false,
    type: DataTypes.STRING,
    unique: true,
  },

  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },

  roll: {
    allowNull: true,
    type: DataTypes.INTEGER,
  }
}

class User extends Model {

  static associations(){

  }

  static config(sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User', //esto sirve para desp cuando cree la variable models sequelize, podamos a acceder a esta tabla con el nombre q le pusimos
      timestamps: false,
    }
  }
}
module.exports = { USER_TABLE, UserSchema, User };
