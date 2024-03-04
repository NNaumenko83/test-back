const shopsRoouter = require('./shops');
const productsRouter = require('./products');
const ordersRoouter = require('./orders');

module.exports = function routes(app) {
    app.use('/api/shops', shopsRoouter);
    app.use('/api/products', productsRouter);
    app.use('/api/orders', ordersRoouter);
};
