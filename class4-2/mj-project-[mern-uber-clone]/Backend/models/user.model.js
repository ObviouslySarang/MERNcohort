const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const userSchema = new mongoose.Schema({
    fullname: {
            firstname: {
                type: String,
                required: true,
                minlength: [3,"First name must be at least 3 characters long"],
            },
            lastname: {
                type: String,
            
                minlength: [3,"Last name must be at least 3 characters long"],
            },
        },
        email: {
            type: String,
            required: true,
            unique: true,
            minlength: [6,"Email must be at least 6 characters long"],
        },
        password: {
            type: String,
            required: true,
            select: false,
        },
        socketId: {
            type: String,
          
        },
    }
)

userSchema.methods.generateAuthToken = function() {
    // Generate a JWT token for the user using their unique _id
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET);
    return token;
}

userSchema.methods.comparePassword = async function(password) {
    // Compare the provided plain-text password with the hashed password in the database
    return await bcrypt.compare(password, this.password);
}

userSchema.statics.hashPassword = async function(password) {
    // Hash a plain-text password with a salt factor of 10 for secure storage
    return await bcrypt.hash(password, 10);
}

const userModel = mongoose.model('User', userSchema);

module.exports = userModel;