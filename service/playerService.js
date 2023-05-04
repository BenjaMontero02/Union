//models es donde sequelize levanta los modelos y es donde se puede consultar
const { models } = require('../libs/sequelize');

class PlayersService{

  constructor(){
  }

  async create(body){
    const create = await models.Jugador.create(body);
    return create;
  }

  async delete(id){
    const player = await models.Jugador.findByPk(id);
    if(player){
      await player.destroy();
      return true;
    }else{
      return false;
    }
  }

  async getAll(){
    const rta = await models.Jugador.findAll();
    return rta;
  };

  async getById(id){
    const rta = await models.Jugador.findByPk(id);
    return rta;
  };

  // getAllPlayersByPaidFees();

  async update(id, body){
    const player = await models.Jugador.findByPk(id);
    const rta = await player.update(body);
    return rta;
  };

}

module.exports = PlayersService;
