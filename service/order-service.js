const { Order } = require('../models');

class OrderService {
    async addOrder(order) {
        console.log('order:', order);
        const result = await Order.create(order);
        console.log('result:', result);
        return;
    }
}

module.exports = new OrderService();
