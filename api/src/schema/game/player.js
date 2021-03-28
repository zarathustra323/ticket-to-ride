const Joi = require('../../joi');
const colors = require('../../data/colors');

module.exports = {
  id: Joi.mongoId(),
  name: Joi.string().trim(),
  color: Joi.string().trim().valid(...colors.player.keys()),
};
