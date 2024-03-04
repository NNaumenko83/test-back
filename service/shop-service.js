const { Shop } = require('../models');

class ShopsService {
    async getShops() {
        const shops = await Shop.find();

        return shops;
    }
}

module.exports = new ShopsService();
