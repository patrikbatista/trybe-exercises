module.exports = (error, res, _req, _next) => {
  console.log(error);
  res.status(500).json({ message: 'erro interno' });
};