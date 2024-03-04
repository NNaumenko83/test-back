const { Schema, model } = require('mongoose');
const { handleMongooseError } = require('../helpers');

const SchemaShops = new Schema(
    {
        name: {
            type: String,
            unique: true,
            required: [true, 'DB: Name is required'],
        },
        location: {
            type: String,
            required: [true, 'DB: location is required'],
        },
    },
    {
        versionKey: false,
        timestamps: true,
        id: true,
        toJSON: {
            transform(doc, ret) {
                ret.id = ret._id;
                delete ret._id;
            },
        },
    },
);

SchemaShops.post('save', handleMongooseError);

const Shop = model('Shop', SchemaShops);

module.exports = Shop;
