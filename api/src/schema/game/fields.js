const Joi = require('../../joi');
const userFields = require('../user/fields');
const classicPlayerSchema = require('./player/classic');

const types = ['CLASSIC'];

module.exports = {
  id: Joi.mongoId(),
  type: Joi.string().trim().valid(...types),
  players: Joi.when('type', {
    switch: [
      { is: 'CLASSIC', then: Joi.array().items(classicPlayerSchema).max(5).default([]), otherwise: Joi.forbidden() },
    ],
  }),
  userId: userFields.id,
};
