const express = require('express');
const cors = require('cors');
const routerApi = require('./routes/index.js');
const { logErrors, errorHandler, boomErrorHandler} = require('./midllewares/errorHandler.js');

const app = express();
const port = 3000;

//sirve para poder recibir un json cuando se hace un post/put/delete
//sin esto no se recibe el json... esto de llama un middleware de node.js
app.use(express.json());


//defino los dominios donde quiero permitir para que consuman la api
const whiteList = ['http://localhost:3000'];

//verifico que el origen este en el array de dominios que permito que use mi api
const options = {
  origin: (origin, callback) => {
    if(whiteList.includes(origin) || !origin){
      callback(null, true);
    }else{
      callback(new Error('acceso denegado'));
    }
  }
}
app.use(cors(options));


//los middlewares van siempre despues del router api
//tambien depende en el orden que esten es como se ejecutan
app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandler);


app.get('/', (req, res) => {
  res.send('funca esta gaverrr!');
});

app.listen(port, () => {
  console.log(`Example app listening at ${port}`);
});

routerApi(app);
