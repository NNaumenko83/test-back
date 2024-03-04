const { getProoductsByShopId } = require('../../controllers');

const Router = require('express').Router;

const router = new Router();

router.get('/by-shop/:shopId', getProoductsByShopId);

module.exports = router;
