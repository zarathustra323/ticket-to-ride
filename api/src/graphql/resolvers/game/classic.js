module.exports = {
  /**
   *
   */
  ClassicGame: {
    /**
     *
     */
    destinations(game) {
      return game.cities.values();
    },

    /**
     *
     */
    playerColors(game) {
      return game.playerColors.values();
    },

    /**
     *
     */
    routeColors(game) {
      return game.routeColors.values();
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
      return gameData.get('CLASSIC').getDestinationsFor(id);
    },
  },
};
