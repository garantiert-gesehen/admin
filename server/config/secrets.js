module.exports = {
  db: process.env.MONGOHQ_URL || process.env.MONGOLAB_URI || 'mongodb://localhost/gg',
  sessionSecret: process.env.SESSION_SECRET || 'dont forget to set it up',
};
