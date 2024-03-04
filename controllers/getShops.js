const { ctrlWrapper } = require('../helpers');
const shopService = require('../service/shop-service');

const getShops = async (req, res) => {
    console.log('getShops:');
    const shops = await shopService.getShops();
    console.log('shops:', shops);

    res.status(200).json(shops);
};

module.exports = ctrlWrapper(getShops);
