const Route = require('./route');

class Routes extends Map {
  constructor(routes = [], settings) {
    super(routes.reduce((arr, { cities, length, colors }) => {
      colors.forEach((color) => {
        const route = new Route({ cities, length, color }, settings);
        arr.push([route.id, route]);
      });
      return arr;
    }, []));
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
