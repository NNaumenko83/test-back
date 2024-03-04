const { ctrlWrapper } = require('../helpers');
const productService = require('../service/product-service');

const getProductsByShopId = async (req, res) => {
    const { shopId } = req.params;
    console.log('shopId:', shopId);
    const products = await productService.getProductsByShopId(shopId);
    console.log('products:', products);

    res.status(200).json(products);
};

module.exports = ctrlWrapper(getProductsByShopId);
