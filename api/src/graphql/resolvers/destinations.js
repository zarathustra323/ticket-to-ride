module.exports = {
  /**
   *
   */
  ClassicDestination: {
    /**
     *
     */
    destinations({ id }, _, { gameData }) {
      const destinations = [];
      gameData.classic.routes.forEach(({ cities }) => {
        if (!cities.includes(id)) return;
        const [destinationId] = cities.filter((city) => city !== id);
        destinations.push(gameData.classic.cities.get(destinationId));
      });
      return destinations;
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
