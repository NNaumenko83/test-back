const { ctrlWrapper } = require('../helpers');

const shops = [
    { name: 'McDonalds', id: 1, address: 'Kyiv' },
    { name: 'KFC', id: 2, address: 'Kyiv' },
    { name: 'Murakami', id: 3, address: 'Kyiv' },
];

const getShops = async (req, res) => {
console.log('getShops:')


    res.status(200).json(shops);
};

module.exports = ctrlWrapper(getShops);
