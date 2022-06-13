const verify = require('string');

module.exports = (productName) => {

  if (!productName) {
    return { 
      status: 400, 
      message: "O campo productName é obrigatório", 
      response: false, 
    };
  }

  if(!verify(productName).isAlpha || productName.length < 4){
    return { 
      status: 400, 
      message: "O campo productName deve ter pelo menos 4 caracteres", 
      response: false, 
    };
  }

  return { 
    status: 200, 
    message: 'ok', 
    response: true, 
  };

};