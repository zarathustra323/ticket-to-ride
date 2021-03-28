module.exports = {
  /**
   *
   */
  Query: {
    /**
     *
     */
    classicPlayerColors(_, __, { gameData }) {
      return gameData.classic.playerColors.values();
    },
  },
};
