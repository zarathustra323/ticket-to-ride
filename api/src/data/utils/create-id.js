const slug = require('slug');

module.exports = (value) => {
  const id = slug(value, { replacement: '_' }).toUpperCase();
  if (!id) throw new Error(`Unable to generate and ID value for ${value}`);
  return id;
};
