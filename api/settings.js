const slug = require('slug');

const data = [
  {
    name: 'Atlanta',
    destinations: [
      { name: 'Charleston', length: 2, colors: ['Any'] },
      { name: 'Nashville', length: 1, colors: ['Any'] },
      { name: 'New Orleans', length: 4, colors: ['Yellow', 'Orange'] },
      { name: 'Miami', length: 5, colors: ['Blue'] },
    ],
  },
  {
    name: 'Boston',
    destinations: [
      { name: 'Montréal', length: 2, colors: ['Any', 'Any'] },
      { name: 'New York', length: 2, colors: ['Yellow', 'Red'] },
    ],
  },
  {
    name: 'Calgary',
    destinations: [
      { name: 'Helena', length: 4, colors: ['Any'] },
      { name: 'Seattle', length: 4, colors: ['Any'] },
      { name: 'Vancouver', length: 3, colors: ['Any'] },
      { name: 'Winnipeg', length: 6, colors: ['White'] },
    ],
  },
  {
    name: 'Charleston',
    destinations: [
      { name: 'Miami', length: 4, colors: ['Pink'] },
      { name: 'Raleigh', length: 2, colors: ['Any'] },
    ],
  },
  {
    name: 'Chicago',
    destinations: [
      { name: 'Duluth', length: 3, colors: ['Red'] },
      { name: 'Pittsburgh', length: 3, colors: ['Orange', 'Black'] },
      { name: 'Omaha', length: 4, colors: ['Blue'] },
      { name: 'Saint Louis', length: 2, colors: ['Green', 'White'] },
      { name: 'Toronto', length: 4, colors: ['White'] },
    ],
  },
  {
    name: 'Dallas',
    destinations: [
      { name: 'El Paso', length: 4, colors: ['Red'] },
      { name: 'Houston', length: 1, colors: ['Any', 'Any'] },
      { name: 'Little Rock', length: 2, colors: ['Any'] },
      { name: 'Oklahoma City', length: 2, colors: ['Any', 'Any'] },
    ],
  },
  {
    name: 'Denver',
    destinations: [
      { name: 'Kansas City', length: 4, colors: ['Black', 'Orange'] },
      { name: 'Helena', length: 4, colors: ['Green'] },
      { name: 'Oklahoma City', length: 4, colors: ['Red'] },
      { name: 'Omaha', length: 4, colors: ['Pink'] },
      { name: 'Phoenix', length: 5, colors: ['White'] },
      { name: 'Salt Lake City', length: 3, colors: ['Red', 'Yellow'] },
      { name: 'Santa Fe', length: 2, colors: ['Any'] },
    ],
  },
  {
    name: 'Duluth',
    destinations: [
      { name: 'Helena', length: 6, colors: ['Orange'] },
      { name: 'Omaha', length: 2, colors: ['Any', 'Any'] },
      { name: 'Sault St. Marie', length: 3, colors: ['Any'] },
      { name: 'Toronto', length: 6, colors: ['Pink'] },
      { name: 'Winnipeg', length: 4, colors: ['Black'] },
    ],
  },
  {
    name: 'El Paso',
    destinations: [
      { name: 'Houston', length: 6, colors: ['Green'] },
      { name: 'Los Angeles', length: 6, colors: ['Black'] },
      { name: 'Oklahoma City', length: 5, colors: ['Yellow'] },
      { name: 'Phoenix', length: 3, colors: ['Any'] },
      { name: 'Santa Fe', length: 2, colors: ['Any'] },
    ],
  },
  {
    name: 'Helena',
    destinations: [
      { name: 'Omaha', length: 5, colors: ['Red'] },
      { name: 'Salt Lake City', length: 3, colors: ['Pink'] },
      { name: 'Seattle', length: 6, colors: ['Yellow'] },
      { name: 'Winnipeg', length: 4, colors: ['Blue'] },
    ],
  },
  {
    name: 'Houston',
    destinations: [
      { name: 'New Orleans', length: 2, colors: ['Any'] },
    ],
  },
  {
    name: 'Kansas City',
    destinations: [
      { name: 'Oklahoma City', length: 2, colors: ['Any', 'Any'] },
      { name: 'Omaha', length: 1, colors: ['Any', 'Any'] },
      { name: 'Saint Louis', length: 2, colors: ['Blue', 'Pink'] },
    ],
  },
  {
    name: 'Las Vegas',
    destinations: [
      { name: 'Los Angeles', length: 2, colors: ['Any'] },
      { name: 'Salt Lake City', length: 3, colors: ['Orange'] },
    ],
  },
  {
    name: 'Little Rock',
    destinations: [
      { name: 'Nashville', length: 3, colors: ['White'] },
      { name: 'New Orleans', length: 3, colors: ['Green'] },
      { name: 'Oklahoma City', length: 2, colors: ['Any'] },
      { name: 'Saint Louis', length: 2, colors: ['Any'] },
    ],
  },
  {
    name: 'Los Angeles',
    destinations: [
      { name: 'Phoenix', length: 3, colors: ['Any'] },
      { name: 'San Francisco', length: 3, colors: ['Pink', 'Yellow'] },
    ],
  },
  {
    name: 'Miami',
    destinations: [
      { name: 'New Orleans', length: 6, colors: ['Red'] },
    ],
  },
  {
    name: 'Montréal',
    destinations: [
      { name: 'New York', length: 3, colors: ['Blue'] },
      { name: 'Sault St. Marie', length: 5, colors: ['Black'] },
      { name: 'Toronto', length: 3, colors: ['Any'] },
    ],
  },
  {
    name: 'Nashville',
    destinations: [
      { name: 'Pittsburgh', length: 4, colors: ['Yellow'] },
      { name: 'Raleigh', length: 3, colors: ['Black'] },
      { name: 'Saint Louis', length: 2, colors: ['Any'] },
    ],
  },
  {
    name: 'New Orleans',
    destinations: [],
  },
  {
    name: 'New York',
    destinations: [
      { name: 'Pittsburgh', length: 2, colors: ['White', 'Green'] },
      { name: 'Washington', length: 2, colors: ['Orange', 'Black'] },
    ],
  },
  {
    name: 'Oklahoma City',
    destinations: [
      { name: 'Santa Fe', length: 3, colors: ['Blue'] },
    ],
  },
  {
    name: 'Omaha',
    destinations: [],
  },
  {
    name: 'Phoenix',
    destinations: [
      { name: 'Santa Fe', length: 3, colors: ['Any'] },
    ],
  },
  {
    name: 'Pittsburgh',
    destinations: [
      { name: 'Raleigh', length: 2, colors: ['Any'] },
      { name: 'Saint Louis', length: 5, colors: ['Green'] },
      { name: 'Toronto', length: 2, colors: ['Any'] },
      { name: 'Washington', length: 2, colors: ['Any'] },
    ],
  },
  {
    name: 'Portland',
    destinations: [
      { name: 'Salt Lake City', length: 6, colors: ['Blue'] },
      { name: 'San Francisco', length: 5, colors: ['Green', 'Pink'] },
      { name: 'Seattle', length: 1, colors: ['Any', 'Any'] },
    ],
  },
  {
    name: 'Raleigh',
    destinations: [
      { name: 'Washington', length: 2, colors: ['Any', 'Any'] },
    ],
  },
  {
    name: 'Saint Louis',
    destinations: [],
  },
  {
    name: 'Salt Lake City',
    destinations: [
      { name: 'San Francisco', length: 5, colors: ['Orange', 'White'] },
    ],
  },
  {
    name: 'San Francisco',
    destinations: [],
  },
  {
    name: 'Santa Fe',
    destinations: [],
  },
  {
    name: 'Sault St. Marie',
    destinations: [
      { name: 'Toronto', length: 2, colors: ['Any'] },
      { name: 'Winnipeg', length: 6, colors: ['Any'] },
    ],
  },
  {
    name: 'Seattle',
    destinations: [
      { name: 'Vancouver', length: 1, colors: ['Any', 'Any'] },
    ],
  },
  {
    name: 'Toronto',
    destinations: [],
  },
  {
    name: 'Vancouver',
    destinations: [],
  },
  {
    name: 'Washington',
    destinations: [],
  },
  {
    name: 'Winnipeg',
    destinations: [],
  },
].map((city) => {
  const id = slug(city.name);
  return {
    id,
    ...city,
    destinations: city.destinations.map((dest) => ({
      id: [id, slug(dest.name)].sort().join('.'),
      ...dest,
    })),
  };
});

const colors = new Set([
  'Black',
  'Blue',
  'Green',
  'Orange',
  'Pink',
  'Red',
  'White',
  'Yellow',
]);

const routes = data.reduce((arr, { name, destinations }) => {
  destinations.forEach((destination) => {
    arr.push({
      id: destination.id,
      cities: [name, destination.name].sort(),
      length: destination.length,
      colors: destination.colors,
    });
  });
  return arr;
}, []);

const cities = data.reduce((arr, { id, name }) => {
  const cityRoutes = routes.filter((route) => route.cities.includes(name));
  const connectedTo = new Set(cityRoutes.reduce((a, route) => {
    a.push(...route.cities);
    return a;
  }, []).filter((n) => n !== name));
  arr.push({
    id,
    name,
    routes: cityRoutes,
    cities: connectedTo,
  });
  return arr;
}, []);

const points = new Map([
  [1, 1],
  [2, 2],
  [3, 4],
  [4, 7],
  [5, 10],
  [6, 15],
]);

const validate = () => {
  const cityNames = new Set(data.map(({ name }) => name));
  if (cityNames.size !== data.length) throw new Error('City length mismatch');
  const destinations = new Map();
  data.forEach((city) => {
    city.destinations.forEach((dest) => {
      const { id } = dest;
      if (destinations.has(id)) throw new Error(`Duplicate destination found: ${id}`);
      destinations.set(id, dest);
      if (!cityNames.has(dest.name)) throw new Error(`Invalid destination: ${dest.name} city not found in ${id}`);
      dest.colors.forEach((color) => {
        if (color === 'Any') return;
        if (!colors.has(color)) throw new Error(`Invalid destination: ${color} color not found in ${id}`);
      });
    });
  });
};

module.exports = {
  colors,
  cities,
  routes,
  points,
  data,
  validate,
};
