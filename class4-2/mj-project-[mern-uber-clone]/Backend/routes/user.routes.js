const express = require('express');
const {body} = require('express-validator');
const router = express.Router();
const userController = require('../controllers/user.controller');


router.post('/register', [
     // Validate the request body for a new user registration
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    
], userController.registerUser);

router.post('/login',[
    // Validate the request body for a user login
    body('email').isEmail().withMessage('Invalid email address'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
], userController.loginUser);

module.exports = router;