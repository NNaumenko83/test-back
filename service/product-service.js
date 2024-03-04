const { Product } = require('../models');

class ProductService {
    async getProductsByShopId(shopId) {
        console.log('shopId:', shopId);
        const products = await Product.find({ shopId }).exec();
        console.log('products:', products);
        return products;
    }
}

console.log(new ProductService());

module.exports = new ProductService();
