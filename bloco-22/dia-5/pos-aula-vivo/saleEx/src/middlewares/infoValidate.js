const schemas = require('../schemas');

module.exports = (req, res, next) => {
  const {infos} = req.body;
  const result = schemas.infoValidate(infos);
  if (!result.response){
    return res.status(result.status).json({message: result.message});
  }
  return next();
}