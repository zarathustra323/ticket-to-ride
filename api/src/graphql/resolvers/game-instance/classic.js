module.exports = {
  /**
   *
   */
  ClassicGamePlayer: {
    /**
     *
     */
    color({ color: id }, _, { gameData }) {
      return gameData.get('CLASSIC').playerColors.get(id);
    },
  },

  /**
   *
   */
  Mutation: {
    /**
     *
     */
    newClassicGame(_, { input }, { repos, auth }) {
      const userId = auth.getUserId();
      const { players } = input;
      return repos.game.create({ type: 'CLASSIC', userId, players });
    },
  },
};
