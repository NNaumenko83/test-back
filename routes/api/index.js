const shopsRoouter = require('./shops');
const productsRouter = require('./products');

module.exports = function routes(app) {
    app.use('/api/shops', shopsRoouter);
    app.use('/api/products', productsRouter);
};
