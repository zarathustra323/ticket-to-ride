const Joi = require('../../../joi');

module.exports = {
  id: Joi.mongoId(),
  name: Joi.string().trim(),
};
