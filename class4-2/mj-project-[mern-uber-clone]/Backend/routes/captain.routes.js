const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const captainController = require('../controllers/captain.controller');

router.post('/register', [
    // Validate the request body for a new captain registration
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.capacity').isLength({min: 1}).withMessage('Capacity must be at least 1'),
    body('vehicle.plateNumber').isLength({min: 3}).withMessage('Plate number must be at least 3 characters long'),
    body('vehicle.vehicleType').isIn(['car','bike','auto']).withMessage('Invalid vehicle type'),
    
], captainController.registerCaptain);


module.exports = router; 