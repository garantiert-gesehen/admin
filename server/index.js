import express from 'express';
import fs from 'fs';
import mongoose from 'mongoose';
import passport from 'passport';
import secrets from './config/secrets';
import mongoExpress from 'mongo-express/lib/middleware';

import mongoExpressConfig from './config/mongo-express';

const app = express();

app.use('/admin', mongoExpress(mongoExpressConfig));

const connect = () => {
  mongoose.connect(secrets.db, (err)  => err
    ? console.log('Error connecting to: ' + secrets.db + '. ' + err)
    : console.log('Succeeded connected to: ' + secrets.db)
  );
};
connect();

mongoose.connection.on('error', console.log);
mongoose.connection.on('disconnected', connect);

// Bootstrap models
fs.readdirSync(__dirname + '/models')
  .forEach(file => ~file.indexOf('.js') && require(__dirname + '/models/' + file));


require('./config/passport')(app, passport);
require('./config/express')(app, passport);
require('./routes')(app);

app.use(express.static('./public'));
app.listen(app.get('port'));
