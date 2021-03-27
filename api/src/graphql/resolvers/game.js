module.exports = {
  /**
   *
   */
  PlayerColorEnum: {
    BLACK: 'Black',
    BLUE: 'Blue',
    GREEN: 'Green',
    RED: 'Red',
    YELLOW: 'Yellow',
  },

  /**
   *
   */
  Game: {
    /**
     *
     */
    players({ players }) {
      return Array.isArray(players) ? players : [];
    },
  },

  /**
   *
   */
  Mutation: {
    createGame(_, { input }, { repos, auth }) {
      const userId = auth.getUserId();
      const { name, players } = input;
      return repos.game.create({ userId, name, players });
    },
  },
};
