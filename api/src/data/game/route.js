const routeId = require('../utils/route-id');

class Route {
  constructor({
    gameId,
    cities = [],
    length,
    color,
  } = {}, settings = {}) {
    if (!cities.length === 2) throw new Error('A route must have two cities.');
    if (!length || length < 1) throw new Error('The route length must be at least one.');

    // a `null` or `Any` color signifies that any color can be used.
    if (color && color !== 'Any' && !settings.routeColors.has(color)) {
      throw new Error(`No route color found for ${color}`);
    }

    this.gameId = gameId;
    this.cityIds = cities.map((name) => {
      const city = settings.cities.get(name);
      if (!city) throw new Error(`No route city for ${name}`);
      return city.id;
    });
    this.length = length;
    this.colorId = (!color || color === 'Any')
      ? null
      : settings.routeColors.get(color).id;
    this.id = routeId(this.cityIds, this.colorId);
  }
}

module.exports = Route;
