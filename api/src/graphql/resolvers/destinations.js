module.exports = {
  /**
   *
   */
  ClassicDestination: {
    /**
     *
     */
    destinations({ id }, _, { gameData }) {
      return gameData.classic.getDestinationsFor(id);
    },
  },

  /**
   *
   */
  Query: {
    /**
     *
     */
    classicDestinations(_, __, { gameData }) {
      return gameData.classic.cities.values();
    },
  },
};
