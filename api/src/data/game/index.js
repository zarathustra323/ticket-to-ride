const createId = require('../utils/create-id');
const Elements = require('./elements');
const Routes = require('./routes');

class Game {
  constructor({
    name,
    playerColors = [],
    routeColors = [],
    cities = [],
    routes = [],
    minPlayers = 2,
    maxPlayers = 5,
  } = {}) {
    this.id = createId(name);
    this.name = name;

    this.minPlayers = minPlayers;
    this.maxPlayers = maxPlayers;

    this.playerColors = new Elements({ gameId: this.id, names: playerColors });
    this.routeColors = new Elements({ gameId: this.id, names: routeColors });

    this.cities = new Elements({ gameId: this.id, names: cities });
    this.routes = new Routes({
      gameId: this.id,
      routes,
      settings: { cities: this.cities, routeColors: this.routeColors },
    });
  }

  /**
   * Gets all destinations for the provided city.
   *
   * @param {string} cityId
   */
  getDesintationsFor(cityId) {
    const routes = this.routes.getRoutesFor(cityId);
    const ids = new Set();
    routes.forEach((route) => {
      const [id] = route.cityIds.filter((cid) => cid !== cityId);
      ids.add(id);
    });
    return [...ids].map((cid) => this.cities.get(cid));
  }
}

module.exports = Game;
