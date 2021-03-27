const Joi = require('../../joi');
const userFields = require('../user/fields');
const playerSchema = require('./player');

module.exports = {
  id: Joi.mongoId(),
  name: Joi.string().trim(),
  players: Joi.array().items(playerSchema).max(5).default([]),
  userId: userFields.id,
};
