const validateDate = require('validate-date');

const verifyDate = (date) => {
  return validateDate(date, responseType="boolean", dateFormat="dd/mm/yyyy");
};


module.exports = (infos) => {
  if(!infos) {
    return { 
      status: 400, 
      message: 'o campo "infos" é obrigatório', 
      response: false, 
    }; 
  }

  const {saleDate, warrantyPeriod} = infos;

  if(!saleDate){
    return { 
      status: 400, 
      message: 'o campo "saleDate" é obrigatório', 
      response: false, 
    }; 
  }

  if (!verifyDate(saleDate)) {
    return { 
      status: 400, 
      message: 'O campo saleDate não é uma data válida', 
      response: false, 
    };    
  }

  if(!warrantyPeriod){
    return { 
      status: 400, 
      message: 'O campo warrantyPeriod é obrigatório', 
      response: false, 
    };
  }

  if(+warrantyPeriod < 1 || +warrantyPeriod > 3) {
    return { 
      status: 400, 
      message: 'O campo warrantyPeriod precisa estar entre 1 e 3', 
      response: false, 
    };
  }

  return { 
    status: 200, 
    message: 'ok', 
    response: true, 
  };
}