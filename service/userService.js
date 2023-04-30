const pool = require('../libs/connect');

class UserService{
  constructor(){
    this.pool = pool;
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
    return true
  }

  async getAll(){
    //como todo es de forma asyncrona uso await
    //defino el query
    const query = 'SELECT email FROM users'
    //ejecuto el query en la conexion
    const res = await this.pool.query(query);
    //.rows para que me devuelva las filas, xq si no me devuelve un choclo enorme
    return res.rows;
  }
}

module.exports = UserService;
