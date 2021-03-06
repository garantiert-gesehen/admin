import Helmet from 'react-helmet';
import React from 'react';
import PropTypes from 'prop-types';

const REACT_SCRIPTS = {
  production: [
    { src: 'https://unpkg.com/react@15.6.1/dist/react.min.js' },
    { src: 'https://unpkg.com/react-dom@15.6.1/dist/react-dom.min.js' }
  ],
  development: [
    { src: 'https://unpkg.com/react@15.6.1/dist/react.js' },
    { src: 'https://unpkg.com/react-dom@15.6.1/dist/react-dom.js' }
  ]
};

const APP_STYLESHEETS = {
  production: [
    { rel: 'stylesheet', href: '/bundle.css' },
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  ],
  development: [
    { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' }
  ]
};

const Html = ({ body, preloadedState }) => {
  const preloadedStateString = `window.__PRELOADED_STATE__=${JSON.stringify(preloadedState)}`;
  const header = Helmet.rewind();

  return (
    <html>
      <head>
        {header.title.toComponent()}
        {header.meta.toComponent()}
        {header.link.toComponent()}
        {APP_STYLESHEETS[process.env.NODE_ENV].map((props, key) =>
          <link {...props} key={key} />
        )}
      </head>
    <body>
      <div id="app" dangerouslySetInnerHTML={{__html: body}} />
        {REACT_SCRIPTS[process.env.NODE_ENV].map((props, key) =>
          <script {...props} key={key} />
        )}
        <script dangerouslySetInnerHTML={{__html: preloadedStateString}} />
        <script src="/bundle.js" />
      </body>
    </html>
  );
};

Html.propTypes = {
  body: PropTypes.string,
  preloadedState: PropTypes.object
};

export default Html;
