import reactApp from '../../app/server.js';

module.exports = function(app, passport) {
  app.get('*', reactApp);
};
