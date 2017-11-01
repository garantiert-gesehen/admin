import reactApp from '../app/server.js';
import users from './controllers/users';
import * as locations from './controllers/locations';
import * as lists from './controllers/lists';
import * as locationStructures from './controllers/locationStructures';
import * as s3 from './controllers/s3';

module.exports = (app) => {
  app.post('/api/login', users.postLogin);
  app.post('/api/signup', users.postSignUp);
  app.post('/api/logout', users.postLogout);

  app.get('/api/locations', locations.getAll);
  app.get('/api/locations/:id', locations.getLocationById);
  app.post('/api/locations', locations.create);
  app.patch('/api/locations/:locationId/:fieldId', locations.updateField);
  app.delete('/api/locations/:locationId', locations.deleteLocation);

  app.get('/api/locationStructures/current', locationStructures.getCurrentStructure);
  app.put('/api/locationStructures/current', locationStructures.updateCurrentStructure);

  app.get('/api/lists', lists.getAll);
  app.post('/api/lists', lists.create);
  app.put('/api/lists/:listId', lists.update);
  app.delete('/api/lists/:listId', lists.remove);

  app.post('/save-details', (req, res) => {
    // TODO: Read POSTed form data and do something useful
  });

  app.get('/api/get-signed-request-s3', s3.getSignedRequest);

  app.get('*', reactApp);
};
