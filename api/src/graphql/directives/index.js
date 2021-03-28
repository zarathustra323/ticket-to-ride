const interfaceDirectives = require('@parameter1/graphql-directive-interface-fields/directives');
const projectDirectives = require('@parameter1/graphql-directive-project/directives');
const AuthDirective = require('./auth');

module.exports = {
  ...interfaceDirectives.classes,
  ...projectDirectives.classes,
  auth: AuthDirective,
};
