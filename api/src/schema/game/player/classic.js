const Joi = require('../../../joi');
const { classic } = require('../../../data');
const fields = require('./index');

module.exports = {
  id: fields.id,
  name: fields.name,
  color: Joi.string().trim().valid(...classic.playerColors.keys()),
};
