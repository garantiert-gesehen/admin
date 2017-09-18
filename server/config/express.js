import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';
import secrets from './secrets';
import flash from 'express-flash';
import methodOverride from 'method-override';
import webpack from 'webpack';
import connectMongo from 'connect-mongo';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import configDev from '../../webpack/webpack.config.dev';

const MongoStore = connectMongo(session);
const isProduction = process.env.NODE_ENV === 'production';

module.exports = (app, passport) => {
  app.set('port', (process.env.PORT || 3000));

  // X-Powered-By menu has no functional value.
  // Keeping it makes it easier for an attacker to build the site's profile
  // It can be removed safely
  app.disable('x-powered-by');

  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
  app.use(methodOverride());

  app.set('trust proxy', 'loopback');

  const sess = {
    resave: true,
    saveUninitialized: false,
    secret: secrets.sessionSecret,
    proxy: true,
    name: 'sessionId',
    cookie: {
      maxAge: 1000 * 60 * 60 * 24 * 60,
      httpOnly: true,
      secure: false
    },
    store: new MongoStore(
      {
        url: secrets.db,
        autoReconnect: true
      }
    )
  };

  console.log(`--------------------------`);
  console.log('===> 😊  Starting Server . . .');
  console.log('===>  Production: ' + isProduction);

  if (isProduction) {
    app.use(express.static(path.resolve(__dirname, '../..', 'build')));
    sess.cookie.secure = false;

  } else {
    const compiler = webpack(configDev);

    app.use(webpackDevMiddleware(compiler, {
      noInfo: true,
      publicPath: configDev.output.publicPath,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    }));
    app.use(webpackHotMiddleware(compiler));
    app.use(express.static(path.resolve(__dirname, '../..', 'app', 'static')));
  }

  app.use(session(sess));
  app.use(passport.initialize());
  app.use(passport.session());
  app.use(flash());
};
