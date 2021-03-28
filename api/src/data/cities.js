const createId = require('./utils/create-id');

module.exports = [
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
].reduce((map, name) => {
  const id = createId(name);
  map.set(id, { id, name });
  return map;
}, new Map());
