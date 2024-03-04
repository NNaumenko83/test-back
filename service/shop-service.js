const { Shop } = require('../models');

class ShopsService {
    async getShops() {
        const shops = await Shop.find();

        return shops;
    }
    async getShopById(id) {
        const shop = await Shop.findById(id);

        return shop;
    }
}

module.exports = new ShopsService();
