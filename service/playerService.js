const sequelize = require('../libs/sequelize');

class PlayersService{

  constructor(){
  }

  async create(body){

    //const res = await this.pool.query(query);
    return true;
  }

  delete(id){
    return true
  }

  async getAll(){
    const query = 'SELECT * FROM jugador'
    const [data] = await sequelize.query(query);
    return data;
  };

  async getById(id){
    const query = `SELECT * FROM public.jugador WHERE id = ${id}`;
    const res = await this.pool.query(query);
    return res.rows;
  };

  // getAllPlayersByPaidFees();

  async update(id, body){
    return true
  };

}

module.exports = PlayersService;
