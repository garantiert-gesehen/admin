import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Router } from 'react-router';
import { Provider } from 'react-redux';
import baseTheme from 'material-ui/styles/baseThemes/lightBaseTheme';
import getMuiTheme from 'material-ui/styles/getMuiTheme';
import * as uiColors from 'material-ui/styles/colors';

import './app.scss';

import createRoutes from '../../routes';

class App extends Component {
  getChildContext() {
    const theme = {
      ...baseTheme,
      palette: {
        ...baseTheme.palette,
        primary1Color: uiColors.green700,
        primary2Color: uiColors.green800,
        pickerHeaderColor: uiColors.green600
      }
    };
    return {
      muiTheme: getMuiTheme(theme)
    };
  }


  render() {
    const { store, history, onUpdate } = this.props;

    return (
      <Provider store={store}>
          <Router history={history} onUpdate={onUpdate} routes={createRoutes(store)} />
      </Provider>
    );
  }
}

App.childContextTypes = {
  muiTheme: PropTypes.object.isRequired
};

App.propTypes = {
  history: PropTypes.object,
  onUpdate: PropTypes.func,
  store: PropTypes.object
};

export default App;
