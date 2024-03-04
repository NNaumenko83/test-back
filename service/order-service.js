const { Order } = require('../models');

class OrderService {
    async addOrder(order) {
        const result = await Order.create(order);
        return;
    }
    async getOrders(query) {
        const orders = await Order.find(query).populate({
            path: 'products.product',
            model: 'Product',
        });
        return orders;
    }
}

module.exports = new OrderService();
