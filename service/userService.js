
//models es donde sequelize levanta los modelos y es donde se puede consultar
const { models } = require('../libs/sequelize');

class UserService{
  constructor(){
  }

  async delete(){
    return true;
  }

  async create(){
    return true;
  }

  async update(){
    return true;
  }

  async getById(id){
    const rta = await models.User.findByPk(id);
    return rta;
  }

  async getAll(){
    // //como todo es de forma asyncrona uso await
    // //defino el query
    // const query = 'SELECT email FROM users'
    // //ejecuto el query en la conexion
    // const res = await this.pool.query(query);
    // //.rows para que me devuelva las filas, xq si no me devuelve un choclo enorme
    // return res.rows;

    const rta = await models.User.findAll();
    return rta;
  }
}

module.exports = UserService;
