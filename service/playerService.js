const pool = require('../libs/connect');

class PlayersService{

  constructor(){
    this.pool = pool;
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
    const res = await this.pool.query(query);
    return res.rows;
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
