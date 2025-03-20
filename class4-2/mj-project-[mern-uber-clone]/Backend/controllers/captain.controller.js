const captainModel = require('../models/captain.model');
const captainService = require('../services/captain.services');
const blacklistTokenModel = require('../models/blacklistToken.model');
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
module.exports.loginCaptain = async (req, res, next) => {
    
        const errors = validationResult(req);
        if(!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }

        const { email, password } = req.body;
        const captain = await captainModel.findOne({ email }).select('+password');
       
        if(!captain) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const isMatch = await captain.comparePassword(password);

        if(!isMatch) {
            return res.status(401).json({ message: 'Invalid email or password' });
        }

        const token = captain.generateAuthToken();
        res.cookie('token', token);
        res.status(200).json({ token, captain });
    
}
module.exports.getCaptainProfile = async (req, res, next) => {

    res.status(200).json({ captain: req.captain });
}
module.exports.logoutCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    await blacklistTokenModel.create({ token });
    res.clearCookie('token');
    res.status(200).json({ message: 'Logged out successfully' });
}