const http = require('http');
const express = require('express');
const helmet = require('helmet');
const graphql = require('./graphql/server');

const service = express();
service.set('trust proxy', ['loopback', 'linklocal', 'uniquelocal']);

service.use(helmet({ contentSecurityPolicy: false }));

service.get('/', (req, res) => {
  res.redirect(301, '/graphql');
});

graphql({ app: service, path: '/graphql' });

module.exports = http.createServer(service);
