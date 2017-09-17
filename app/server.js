import React from 'react';
import { match, RouterContext } from 'react-router';
import { Provider } from 'react-redux';
import { renderToString, renderToStaticMarkup } from 'react-dom/server';

import { setUser } from './redux/actions/user';
import Html from './components/html/html.jsx';
import configureStore from './redux/configureStore';
import createRoutes from './routes';
import fetchData from './fetchDataMiddleware';

export default (req, res, next) => {
  const store = configureStore({ isClient: false });
  const routes = createRoutes(store);

  if (req.user) {
    store.dispatch(setUser(req.user));
  }

  match({ routes, location: req.url }, (error, redirectLocation, renderProps) => {
    if (error) {
      return res.status(500).send(error.message);
    }

    if (redirectLocation) {
      return res.redirect(302, redirectLocation.pathname + redirectLocation.search);
    }

    if (!renderProps) {
      return res.status(404).send('Not found');
    }

    return fetchData({ store, ...renderProps })
      .then(() => {
        const body = process.env.NODE_ENV === 'production'
          ? renderToString(
            <Provider store={store}>
              <RouterContext {...renderProps} />
            </Provider>
          )
          : null;
        const preloadedState = store.getState();

        res
          .status(200)
          .send(`<!DOCTYPE html>${renderToStaticMarkup(React.createElement(Html, { body, preloadedState }))}`);
      })
      .catch((err) => next(err));

  });
};
