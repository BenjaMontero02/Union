//librerias se encarga de la conexion a terceros

const { Pool } = require('pg');

//instancio la conexion a la db con una pool de conexiones para que sea mas optimo
const pool = new Pool({
  host: 'localhost',
  port: 5432,
  user: 'postgres',
  password: '43803168cacharifc',
  database: 'uniondb'
})


module.exports = pool;

