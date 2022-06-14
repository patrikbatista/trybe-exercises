const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const {productName} = req.body;
  const result = schemas.productNameValidate(productName);
  if (!result.response){
    return res.status(result.status).json({message: result.message});
  }
  return next();
}