module.exports = {
  /**
   *
   */
  ClassicGame: {
    /**
     *
     */
    destinations(_, __, { gameData }) {
      return gameData.classic.cities.values();
    },

    /**
     *
     */
    playerColors(_, __, { gameData }) {
      return gameData.classic.playerColors.values();
    },

    /**
     *
     */
    routeColors(_, __, { gameData }) {
      return gameData.classic.playerColors.values();
    },
  },

  /**
   *
   */
  ClassicGameDestination: {
    /**
     *
     */
    destinations({ id }, _, { gameData }) {
      return gameData.classic.getDestinationsFor(id);
    },
  },
};
