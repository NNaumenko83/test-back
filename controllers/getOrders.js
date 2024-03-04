const { ctrlWrapper } = require('../helpers');
const orderService = require('../service/order-service');

const getOrders = async (req, res) => {
    const { email, phone } = req.query;

    let query = {};

    if (email) {
        query.email = email;
    }
    if (phone) {
        query.phone = phone;
    }

    const orders = await orderService.getOrders(query);
    if (orders.length === 0) {
        return res.status(404).json({ message: 'Orders not found' });
    }

    res.status(200).json(orders);
};

module.exports = ctrlWrapper(getOrders);
