const Joi = require("joi");

const signUpValidation = (req, res, next) => {
  const schema = Joi.object({
    name: Joi.string().min(4).max(100).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error:error.details, message: "bad request" });
  }
  next();
};

//======== login validation middleware ========
const loginValidation = (req, res, next) => {
  const schema = Joi.object({
    email: Joi.string().email().required(),
    password: Joi.string().min(4).required(),
  });
  const { error } = schema.validate(req.body);
  if (error) {
    return res.status(400).json({ error:error.details, message: "bad request" });
  }
  next();
};

module.exports = { signUpValidation, loginValidation };
