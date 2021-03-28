const Joi = require('../../joi');
const { classic } = require('../../data');

module.exports = {
  id: Joi.mongoId(),
  name: Joi.string().trim(),
  color: Joi.string().trim().valid(...classic.playerColors.keys()),
};
