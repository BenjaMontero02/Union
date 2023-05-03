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

  fechaNac: {
    allowNull: true,
    field: 'fecha_nac',
    type: DataTypes.DATE,
  },

  categoriaId: {
    allowNull: false,
    field: 'categoria_id',
    type: DataTypes.INTEGER,
  }
}

class Player extends Model {

    static associations(){};

    static config(sequelize){
      return {
        sequelize,
        tableName: PLAYER_TABLE,
        modelName: 'jugador',
        timestamps : false,
      }
    }
}

module.exports = { PLAYER_TABLE, Player, PlayerSchema};
