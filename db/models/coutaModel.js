const { Model, DataTypes, Sequelize} = require("sequelize");

const CUOTA_TABLE = 'cuota';

const CoutaSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  jugadorId: {
    allowNull: false,
    field: 'jugador_id',
    type: DataTypes.INTEGER,
  },

  categoriaId: {
    allowNull: false,
    field: 'categoria_id',
    type: DataTypes.INTEGER,
  }
}

class Couta extends Model {

  static associations(){

  }

  static config(sequelize){

    return {
    sequelize,
    tableName: CUOTA_TABLE,
    modelName: 'cuota',
    timestamps: false,
    }
  }
}
