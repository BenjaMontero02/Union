const { Model, DataTypes, Sequelize} = require("sequelize");

const CATEGORIA_TABLE =  'categoria'

const CategoriaSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },

  categoria: {
    allowNull: false,
    type: DataTypes.STRING,
  }
}

class Categoria extends Model{

  static associations(){}

  static config(sequelize){

    return {
    sequelize,
    tableName: CATEGORIA_TABLE,
    modelName: 'categoria',
    timestamps: false,
    }
  }
}

module.exports = { CATEGORIA_TABLE, CategoriaSchema, Categoria };
