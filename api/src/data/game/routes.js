const Route = require('./route');

class Routes extends Map {
  constructor({ gameId, routes = [], settings } = {}) {
    if (!gameId) throw new Error('No game ID was provided to the Routes constructor.');
    super(routes.reduce((arr, { cities, length, colors }) => {
      colors.forEach((color) => {
        const route = new Route({
          gameId,
          cities,
          length,
          color,
        }, settings);
        arr.push([route.id, route]);
      });
      return arr;
    }, []));
    this.gameId = gameId;
  }

  getRoutesFor(cityId) {
    const routes = [];
    this.forEach((route) => {
      if (route.cityIds.includes(cityId)) routes.push(route);
    });
    return routes;
  }
}

module.exports = Routes;
