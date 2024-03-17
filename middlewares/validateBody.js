const HttpError = require("../helpers/HttpError");

const validateBody = (schema) => {
  const func = async (req, res, next) => {
    if (!req.body) {
      return next(HttpError(400, "Invalid request body"));
    }

    const { error } = schema.validate(req.body);
    if (error) {
      next(HttpError(400, error.message));
    }
    next();
  };
  return func;
};

module.exports = validateBody;
