const Joi = require('../joi');

module.exports = {
  createdAt: Joi.date(),
  updatedAt: Joi.date(),
};
