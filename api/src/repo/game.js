const { validateAsync } = require('@parameter1/joi/utils');
const { ObjectId } = require('@parameter1/mongodb');
const Joi = require('../joi');
const PaginableRepo = require('./-paginable');
const UserRepo = require('./user');
const fields = require('../schema/game/fields');

class GameRepo extends PaginableRepo {
  /**
   *
   */
  constructor({
    client,
    dbName,
    userRepo,
  } = {}) {
    super({
      name: 'game',
      collectionName: 'games',
      dbName,
      client,
      collatableFields: ['email'],
    });
    if (!(userRepo instanceof UserRepo)) throw new Error('The `userRepo` must be an instance of UserRepo');
    this.userRepo = userRepo;
  }

  /**
   * @param {object} params
   */
  async create(params = {}) {
    const {
      userId,
      name,
      players,
      options,
    } = await validateAsync(Joi.object({
      userId: fields.userId,
      name: fields.name,
      players: fields.players,
      options: Joi.object().default({}),
    }).required(), params);
    const user = await this.userRepo.findByObjectId({
      id: userId,
      options: { strict: true, projection: { _id: 1 } },
    });
    return this.insertOne({
      doc: {
        name,
        players: players.map((player) => ({ _id: new ObjectId(), ...player })),
        user,
      },
      options: { ...options, withDates: true },
    });
  }
}

module.exports = GameRepo;
