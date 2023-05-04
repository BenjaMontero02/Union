const boom = require('@hapi/boom');

//recibo el schema que quiero validar y la propiedad, ya sea body params o query
function validatorHandler(schema, propierty){
  //con esto puedo generar middlewares de forma dinamica, closure en js o algo asi se llama
    return (req, res, next) => {
      //le digo de donde sacar la informacion del request que se fije de donde viene depende propierty
      //para validar, de forma dinamica (sigue abajo)
      const data = req[propierty]
      // esto me devuelve un error en forma de propiedad
      //{ abortEarly: fale} esto es para q me devuelva todos los errores de validacion juntos
      const {error}  = schema.validate(data, { abortEarly: false});

      //en caso de haber un error, mandarle los errores al midllewares
      if(error){
        //le indico que clase de error es, al ser un error en la peticion se pone badrequest
        next(boom.badRequest(error));
      }else{
        next()
      }
    }

}

module.exports = validatorHandler;
