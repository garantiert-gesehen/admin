import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Page from './components/page/page.jsx';
import Login from './components/login/loginContainer';

export default (
  <Route component={Page} path="/">
    <IndexRoute component={Login} />
  </Route>
);
