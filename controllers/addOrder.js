const { ctrlWrapper } = require('../helpers');
const orderService = require('../service/order-service');

const addOrder = async (req, res) => {
    const order = req.body;

    await orderService.addOrder(req.body);

    res.status(201).json('Order created successfully');
};

module.exports = ctrlWrapper(addOrder);
