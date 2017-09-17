import reactApp from '../app/server.js';
import users from './controllers/users';

module.exports = (app) => {
  app.post('/api/login', users.postLogin);
  app.post('/api/signup', users.postSignUp);
  app.post('/api/logout', users.postLogout);

  app.get('*', reactApp);
};
