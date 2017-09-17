import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Page from './components/page/page.jsx';
import Inner from './components/inner/inner.jsx';
import Admin from './components/admin/admin.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import Login from './components/login/loginContainer';

export default store => {
  const requireAuth = (nextState, replace, callback) => {
    const { user: { isAuthenticated } } = store.getState();

    if (!isAuthenticated) {
      replace({
        pathname: '/',
        state: { nextPathname: nextState.location.pathname }
      });
    }
    callback();
  };

  const redirectAuth = (nextState, replace, callback) => {
    const { user: { isAuthenticated }} = store.getState();
    if (isAuthenticated) {
      replace({
        pathname: '/dashboard'
      });
    }
    callback();
  };
  return (
    <Route component={Page} path="/">
      <IndexRoute component={Login} onEnter={redirectAuth} />
      <Route component={Inner}>
        <Route component={Admin} onEnter={requireAuth}>
          <Route path="dashboard" component={Dashboard} />
        </Route>
      </Route>
    </Route>
  );
}
