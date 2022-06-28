module.exports = (error, _req, res, _next) => {
  const isError = Object.hasOwn(error, 'status');
  if (isError) {
    return res.status(error.status).json(error.message);
  }
  return res.status(500).json({ message: 'erro interno' });
};