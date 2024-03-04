module.exports = class UserDto {
    name;
    id;
    location;

    constructor(model) {
        this.name = model.name;
        this.id = model._id;
        this.location = model.location;
    }
};
