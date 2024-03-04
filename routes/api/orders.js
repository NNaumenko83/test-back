const { addOrder, getOrders } = require('../../controllers');
const { validateBody, isValidId } = require('../../middlewares');
const { addOrderSchema } = require('../../models');

const Router = require('express').Router;

const router = new Router();

router.post('/', validateBody(addOrderSchema), addOrder);
router.get('/', getOrders);

module.exports = router;
