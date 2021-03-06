const AuthContext = require('./auth');
const createLoaders = require('../dataloaders');
const repos = require('../../repo');
const gameData = require('../../data');

module.exports = async ({ req }) => {
  const auth = new AuthContext({
    header: req.get('authorization'),
    userRepo: repos.user,
  });
  const [loaders] = await Promise.all([
    createLoaders(),
    auth.load(),
  ]);
  return {
    gameData,
    auth,
    req,
    repos,
    loaders,
    ip: req.ip,
    ua: req.get('user-agent'),
  };
};
