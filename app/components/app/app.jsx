import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';

import routes from '../../routes';

class App extends Component {
  render() {
    const { store, history, onUpdate } = this.props;

    return (
      <Provider store={store}>
          <Router history={history} onUpdate={onUpdate} routes={routes} />
      </Provider>
    );
  }
}

App.propTypes = {
  history: PropTypes.object,
  onUpdate: PropTypes.func,
  store: PropTypes.object
};

export default App;