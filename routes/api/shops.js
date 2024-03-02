const {
    getShops,
} = require('../../controllers');

// const { validateBody} = require('../../middlewares');


const Router = require('express').Router;

const router = new Router();

router.get('/', getShops);



module.exports = router;
