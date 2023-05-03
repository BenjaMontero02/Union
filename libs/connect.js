// //librerias se encarga de la conexion a terceros

// const { Pool } = require('pg');
// const { config } = require('../config/config');

// //protego encodeando lo mas importante
// const USER = encodeURIComponent(config.dbUser);
// const PASSWORD = encodeURIComponent(config.dbPassword);

// //lo pongo todo en la uri
// const URI = `postgres://${USER}:${PASSWORD}@${config.dbHost}:${config.dbPort}/${config.dbName}`;

// //instancio la conexion a la db con una pool de conexiones para que sea mas optimo y le paso uri como connectiostring
// const pool = new Pool({ connectionString: URI });


// module.exports = pool;

