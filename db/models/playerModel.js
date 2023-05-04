const { Model, DataTypes, Sequelize} = require("sequelize");

const PLAYER_TABLE = 'jugador';

const PlayerSchema = {
  id: {
    allowNull: false,
    autoIncrement: true,
    primaryKey: true,
    type: DataTypes.INTEGER,
  },

  nombre: {
    allowNull: false,
    type: DataTypes.STRING
  },

  apellido: {
    allowNull: false,
    type: DataTypes.STRING
  },

  fecha_nac: {
    allowNull: true,
    type: DataTypes.DATE,
  },

  categoria_id: {
    allowNull: false,
    type: DataTypes.INTEGER,
  }
}

class Player extends Model {

    static associations(){};

    static config(sequelize){
      return {
        sequelize,
        tableName: PLAYER_TABLE,
        modelName: 'Jugador',
        timestamps : false,
      }
    }
}

module.exports = { PLAYER_TABLE, Player, PlayerSchema};
