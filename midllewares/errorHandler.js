//este archivo maneja los errores para mostrar al usuario cuando algo falla
function logErrors(err, req, res, next){
  next(err);
}

function errorHandler(err, req, res, next){
  res.status(500).json({
    message: err.message,
    stack: err.stack
  });
}
//uso libreria boom que sirve para manejar mejor los errores
function boomErrorHandler(err, req, res, next){
//pregunto si el error que se activo es de tipo boom
  if(err.isBoom){
    //es la variable donde boom guarda los errores, la obtengo desde err
    const { output } = err;
    //mando en la resp el status pero ya no pongo el numero, ya que boom sabe cual es
    //el payload es el json con el error
    res.status(output.statusCode).json(output.payload);
  }else{
    //si no lo mando al proximo errorhandler que haya
    next(err)
  }

}

//exporto con esa sintaxis las funciones que quiero
module.exports = { logErrors, errorHandler, boomErrorHandler};
