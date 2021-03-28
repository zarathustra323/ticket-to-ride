const slug = require('slug');

module.exports = (value) => slug(value, { replacement: '_' }).toUpperCase();
