const {
  port,
  cleanEnv,
  str,
} = require('envalid');

module.exports = cleanEnv(process.env, {
  APP_URL: str({ desc: 'The user-facing, application URL.' }),
  EMAIL_FROM: str({ desc: 'The from name to use when sending notification emails.', default: 'Ticket Scores <support@ticketscores.com>' }),
  MONGO_URI: str({ desc: 'The MongoDB instance to connect to.' }),
  HOST: str({ desc: 'The host that the service will run on.', default: '0.0.0.0' }),
  PORT: port({ desc: 'The port that the service will run on.', default: 80 }),
  SENDGRID_API_KEY: str({ desc: 'The Sendgrid API key for sending email.' }),
  TOKEN_SECRET: str({ desc: 'The secret for signing JWTs' }),
});
