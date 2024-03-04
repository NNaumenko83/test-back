const Shop = require('./shop-model');
const Product = require('./product-model');
const { Order, addOrderSchema } = require('./order-model');

module.exports = { Shop, Product, Order, addOrderSchema };
