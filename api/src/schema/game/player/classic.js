const Joi = require('../../../joi');
const games = require('../../../data');
const fields = require('./index');

module.exports = {
  id: fields.id,
  name: fields.name,
  color: Joi.string().trim().valid(...games.get('CLASSIC').playerColors.keys()),
};
