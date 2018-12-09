const makeNewError = (status, message) => {
  const err = new Error(message);
  err.status = status;
  return err;
};

const notFound = (req, res, next) => {
  next(makeNewError(404, "Endpoint not found"));
};

const finalErrorHandler = (err, req, res, next) => {
  res.status(err.status || 500);
  res.json({
    error: {
      message: err.message
    }
  });
};

module.exports = { makeNewError, notFound, finalErrorHandler };
