function errorHandler(error, req, res, next) {
  let response = { error: { message: 'server error' } };
  res.status(500).json(response);
}

module.exports = { errorHandler };
