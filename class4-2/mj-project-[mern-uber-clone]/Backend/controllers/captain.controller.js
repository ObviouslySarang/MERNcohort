const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.services');
const { validationResult } = require('express-validator');

module.exports.registerCaptain = async (req, res,) => {

    const errors = validationResult(req);
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, fullname, vehicle } = req.body;

    const doesCaptainExist = await captainModel.findOne({ email });
    if(doesCaptainExist) {
        return res.status(400).json({ message: 'Captain already exists' });}

    const hashPassword = await captainModel.hashPassword(password);

    try {
        const captain = await captainService.registerCaptain({
            email,
            password: hashPassword,
            firstname: fullname.firstname,
            lastname: fullname.lastname,
            color: vehicle.color,
            capacity: vehicle.capacity,
            plateNumber: vehicle.plateNumber,
            vehicleType: vehicle.vehicleType
        });

        const token = captain.generateAuthToken();
        res.status(201).json({ token, captain });
      
    } catch(err) {
        res.status(500).json({ message: err.message });
    }

    const token = captain.generateAuthToken();
    res.status(201).json({ token, captain });
   
}