import React from 'react';
import { Route, IndexRoute } from 'react-router';

import Page from './components/page/page.jsx';
import Inner from './components/inner/inner.jsx';
import Admin from './components/admin/admin.jsx';
import Dashboard from './components/dashboard/dashboard.jsx';
import LocationStructure from './components/location-structure/locationStructureContainer';
import Lists from './components/lists/listsContainer';
import ListEditor from './components/list-editor/listEditorContainer';
import Locations from './components/locations/locationsContainer';
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
  const requireRole = (nextState, replace, callback, roles) => {
    const { user } = store.getState();

    if (!roles.find(role => user[role] === true)) {
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
          <Route path="/dashboard" component={Dashboard} />
          <Route
            path="/location-structure"
            component={LocationStructure}
            onEnter={(nextState, replace, callback) => requireRole(nextState, replace, callback, ['isAdmin'])}
          />
          <Route path="/locations" component={Locations} />
          <Route
            path="/lists"
            component={Lists}
            onEnter={(nextState, replace, callback) => requireRole(nextState, replace, callback, ['isAdmin'])}
          />
          <Route
            path="/lists/new"
            component={ListEditor}
            onEnter={(nextState, replace, callback) => requireRole(nextState, replace, callback, ['isAdmin'])}
          />
          <Route
            path="/lists/:id"
            component={ListEditor}
            onEnter={(nextState, replace, callback) => requireRole(nextState, replace, callback, ['isAdmin'])}
          />
        </Route>
      </Route>
    </Route>
  );
}
