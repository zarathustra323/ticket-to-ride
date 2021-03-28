const Elements = require('./classes/elements');
const Routes = require('./classes/routes');
const createId = require('./utils/create-id');

class ClassicGame {
  constructor() {
    const name = 'Classic';
    this.id = createId(name);
    this.name = name;

    this.playerColors = new Elements([
      'Black',
      'Blue',
      'Green',
      'Red',
      'Yellow',
    ]);
    this.routeColors = new Elements([
      'Black',
      'Blue',
      'Green',
      'Orange',
      'Pink',
      'Red',
      'White',
      'Yellow',
    ]);
    this.cities = new Elements([
      'Atlanta',
      'Boston',
      'Calgary',
      'Charleston',
      'Chicago',
      'Dallas',
      'Denver',
      'Duluth',
      'El Paso',
      'Helena',
      'Houston',
      'Kansas City',
      'Las Vegas',
      'Little Rock',
      'Los Angeles',
      'Miami',
      'Montréal',
      'Nashville',
      'New Orleans',
      'New York',
      'Oklahoma City',
      'Omaha',
      'Phoenix',
      'Pittsburgh',
      'Portland',
      'Raleigh',
      'Saint Louis',
      'Salt Lake City',
      'San Francisco',
      'Santa Fe',
      'Sault St. Marie',
      'Seattle',
      'Toronto',
      'Vancouver',
      'Washington',
      'Winnipeg',
    ]);
    this.routes = new Routes([
      { cities: ['Atlanta', 'Charleston'], length: 2, colors: ['Any'] },
      { cities: ['Atlanta', 'Nashville'], length: 1, colors: ['Any'] },
      { cities: ['Atlanta', 'New Orleans'], length: 4, colors: ['Yellow', 'Orange'] },
      { cities: ['Atlanta', 'Miami'], length: 5, colors: ['Blue'] },
      { cities: ['Boston', 'Montréal'], length: 2, colors: ['Any', 'Any'] },
      { cities: ['Boston', 'New York'], length: 2, colors: ['Yellow', 'Red'] },
      { cities: ['Calgary', 'Helena'], length: 4, colors: ['Any'] },
      { cities: ['Calgary', 'Seattle'], length: 4, colors: ['Any'] },
      { cities: ['Calgary', 'Vancouver'], length: 3, colors: ['Any'] },
      { cities: ['Calgary', 'Winnipeg'], length: 6, colors: ['White'] },
      { cities: ['Charleston', 'Miami'], length: 4, colors: ['Pink'] },
      { cities: ['Charleston', 'Raleigh'], length: 2, colors: ['Any'] },
      { cities: ['Chicago', 'Duluth'], length: 3, colors: ['Red'] },
      { cities: ['Chicago', 'Pittsburgh'], length: 3, colors: ['Orange', 'Black'] },
      { cities: ['Chicago', 'Omaha'], length: 4, colors: ['Blue'] },
      { cities: ['Chicago', 'Saint Louis'], length: 2, colors: ['Green', 'White'] },
      { cities: ['Chicago', 'Toronto'], length: 4, colors: ['White'] },
      { cities: ['Dallas', 'El Paso'], length: 4, colors: ['Red'] },
      { cities: ['Dallas', 'Houston'], length: 1, colors: ['Any', 'Any'] },
      { cities: ['Dallas', 'Little Rock'], length: 2, colors: ['Any'] },
      { cities: ['Dallas', 'Oklahoma City'], length: 2, colors: ['Any', 'Any'] },
      { cities: ['Denver', 'Kansas City'], length: 4, colors: ['Black', 'Orange'] },
      { cities: ['Denver', 'Helena'], length: 4, colors: ['Green'] },
      { cities: ['Denver', 'Oklahoma City'], length: 4, colors: ['Red'] },
      { cities: ['Denver', 'Omaha'], length: 4, colors: ['Pink'] },
      { cities: ['Denver', 'Phoenix'], length: 5, colors: ['White'] },
      { cities: ['Denver', 'Salt Lake City'], length: 3, colors: ['Red', 'Yellow'] },
      { cities: ['Denver', 'Santa Fe'], length: 2, colors: ['Any'] },
      { cities: ['Duluth', 'Helena'], length: 6, colors: ['Orange'] },
      { cities: ['Duluth', 'Omaha'], length: 2, colors: ['Any', 'Any'] },
      { cities: ['Duluth', 'Sault St. Marie'], length: 3, colors: ['Any'] },
      { cities: ['Duluth', 'Toronto'], length: 6, colors: ['Pink'] },
      { cities: ['Duluth', 'Winnipeg'], length: 4, colors: ['Black'] },
      { cities: ['El Paso', 'Houston'], length: 6, colors: ['Green'] },
      { cities: ['El Paso', 'Los Angeles'], length: 6, colors: ['Black'] },
      { cities: ['El Paso', 'Oklahoma City'], length: 5, colors: ['Yellow'] },
      { cities: ['El Paso', 'Phoenix'], length: 3, colors: ['Any'] },
      { cities: ['El Paso', 'Santa Fe'], length: 2, colors: ['Any'] },
      { cities: ['Helena', 'Omaha'], length: 5, colors: ['Red'] },
      { cities: ['Helena', 'Salt Lake City'], length: 3, colors: ['Pink'] },
      { cities: ['Helena', 'Seattle'], length: 6, colors: ['Yellow'] },
      { cities: ['Helena', 'Winnipeg'], length: 4, colors: ['Blue'] },
      { cities: ['Houston', 'New Orleans'], length: 2, colors: ['Any'] },
      { cities: ['Kansas City', 'Oklahoma City'], length: 2, colors: ['Any', 'Any'] },
      { cities: ['Kansas City', 'Omaha'], length: 1, colors: ['Any', 'Any'] },
      { cities: ['Kansas City', 'Saint Louis'], length: 2, colors: ['Blue', 'Pink'] },
      { cities: ['Las Vegas', 'Los Angeles'], length: 2, colors: ['Any'] },
      { cities: ['Las Vegas', 'Salt Lake City'], length: 3, colors: ['Orange'] },
      { cities: ['Little Rock', 'Nashville'], length: 3, colors: ['White'] },
      { cities: ['Little Rock', 'New Orleans'], length: 3, colors: ['Green'] },
      { cities: ['Little Rock', 'Oklahoma City'], length: 2, colors: ['Any'] },
      { cities: ['Little Rock', 'Saint Louis'], length: 2, colors: ['Any'] },
      { cities: ['Los Angeles', 'Phoenix'], length: 3, colors: ['Any'] },
      { cities: ['Los Angeles', 'San Francisco'], length: 3, colors: ['Pink', 'Yellow'] },
      { cities: ['Miami', 'New Orleans'], length: 6, colors: ['Red'] },
      { cities: ['Montréal', 'New York'], length: 3, colors: ['Blue'] },
      { cities: ['Montréal', 'Sault St. Marie'], length: 5, colors: ['Black'] },
      { cities: ['Montréal', 'Toronto'], length: 3, colors: ['Any'] },
      { cities: ['Nashville', 'Pittsburgh'], length: 4, colors: ['Yellow'] },
      { cities: ['Nashville', 'Raleigh'], length: 3, colors: ['Black'] },
      { cities: ['Nashville', 'Saint Louis'], length: 2, colors: ['Any'] },
      { cities: ['New York', 'Pittsburgh'], length: 2, colors: ['White', 'Green'] },
      { cities: ['New York', 'Washington'], length: 2, colors: ['Orange', 'Black'] },
      { cities: ['Oklahoma City', 'Santa Fe'], length: 3, colors: ['Blue'] },
      { cities: ['Phoenix', 'Santa Fe'], length: 3, colors: ['Any'] },
      { cities: ['Pittsburgh', 'Raleigh'], length: 2, colors: ['Any'] },
      { cities: ['Pittsburgh', 'Saint Louis'], length: 5, colors: ['Green'] },
      { cities: ['Pittsburgh', 'Toronto'], length: 2, colors: ['Any'] },
      { cities: ['Pittsburgh', 'Washington'], length: 2, colors: ['Any'] },
      { cities: ['Portland', 'Salt Lake City'], length: 6, colors: ['Blue'] },
      { cities: ['Portland', 'San Francisco'], length: 5, colors: ['Green', 'Pink'] },
      { cities: ['Portland', 'Seattle'], length: 1, colors: ['Any', 'Any'] },
      { cities: ['Raleigh', 'Washington'], length: 2, colors: ['Any', 'Any'] },
      { cities: ['Salt Lake City', 'San Francisco'], length: 5, colors: ['Orange', 'White'] },
      { cities: ['Sault St. Marie', 'Toronto'], length: 2, colors: ['Any'] },
      { cities: ['Sault St. Marie', 'Winnipeg'], length: 6, colors: ['Any'] },
      { cities: ['Seattle', 'Vancouver'], length: 1, colors: ['Any', 'Any'] },
    ], {
      cities: this.cities,
      routeColors: this.routeColors,
    });
  }

  getDestinationsFor(cityId) {
    const routes = this.routes.getRoutesFor(cityId);
    const ids = new Set();
    routes.forEach((route) => {
      const [id] = route.cityIds.filter((cid) => cid !== cityId);
      ids.add(id);
    });
    return [...ids].map((cid) => this.cities.get(cid));
  }
}

module.exports = ClassicGame;
