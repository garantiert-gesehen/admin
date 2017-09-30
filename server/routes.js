import reactApp from '../app/server.js';
import users from './controllers/users';
import * as locations from './controllers/locations';
import * as locationStructures from './controllers/locationStructures';

module.exports = (app) => {
  app.post('/api/login', users.postLogin);
  app.post('/api/signup', users.postSignUp);
  app.post('/api/logout', users.postLogout);

  app.get('/api/locations', locations.getAll);
  app.get('/api/locations/:id', locations.getLocationById);
  app.post('/api/locations', locations.create);

  app.get('/api/locationStructures/current/', locationStructures.getCurrentStructure);
  app.post('/api/locationStructures/current/', locationStructures.updateCurrentStructure);

  app.get('*', reactApp);
};
