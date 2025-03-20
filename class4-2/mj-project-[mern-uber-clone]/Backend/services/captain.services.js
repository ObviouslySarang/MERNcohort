const captainModel = require('../models/captain.model');

module.exports.registerCaptain = async ({
    email,
    password,
    firstname,
    lastname,
    color,
    capacity,
    plateNumber,
    vehicleType,
}) => {
    if(!email || !password || !firstname || !color || !capacity || !plateNumber || !vehicleType) {
        throw new Error('All fields are required');
    }
    const captain = captainModel.create({
        email,
        password,
        fullname: {
            firstname,
            lastname,
        },
        vehicle: {
            color,
            capacity,
            plateNumber,
            vehicleType,
        },
    });
    return captain;
}