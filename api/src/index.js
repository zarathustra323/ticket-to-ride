const bootService = require('@parameter1/terminus/boot-service');
const { log } = require('@parameter1/terminus/utils');
const { filterUri } = require('@parameter1/mongodb/utils');
const mongodb = require('./mongodb');
const server = require('./server');
const pkg = require('../package.json');
const { HOST, PORT } = require('./env');

process.on('unhandledRejection', (e) => {
  throw e;
});

bootService({
  name: pkg.name,
  version: pkg.version,
  server,
  host: HOST,
  port: PORT,
  onStart: async () => mongodb.connect().then((client) => log(filterUri(client))),
  onSignal: () => mongodb.close(),
  onHealthCheck: () => mongodb.ping({ id: pkg.name }).then(() => 'db okay'),
}).catch((e) => setImmediate(() => {
  throw e;
}));
