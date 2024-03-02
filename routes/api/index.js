const shopsRoouter = require( './shops');


module.exports = function routes(app) {
  app.use('/api/shops', shopsRoouter);
};