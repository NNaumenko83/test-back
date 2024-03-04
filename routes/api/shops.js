const { getShops, getShopById } = require('../../controllers');

// const { validateBody} = require('../../middlewares');

const Router = require('express').Router;

const router = new Router();

router.get('/', getShops);
router.get('/:shopId', getShopById);

module.exports = router;
