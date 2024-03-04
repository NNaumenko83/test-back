const { HttpError } = require('../helpers');

const validateBody = (schema) => {
    const func = (req, res, next) => {
        console.log('Validate Body');
        console.log('req.body:', req.body);
        const { error } = schema.validate(req.body);
        console.log('error:', error);
        if (error) {
            next(HttpError(400, 'missing required name field'));
        }
        next();
    };

    return func;
};

module.exports = validateBody;
