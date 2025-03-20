const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');

const captainSchema = new mongoose.Schema({
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
        status:{
            type: String,
            enum: ["active","inactive"],
            default: "inactive"
        },
        vehicle:{
            color:{
                type: String,
                required: true,
                minlength:[3,"Color must be at least 3 characters long"]
            },
            capacity:{
                type: Number,
                required: true,
                minlength: [1,"Capacity must be at least 1"],
            },
            plateNumber:{
                type: String,
                required: true,
                minlength:[3,"Plate number must be at least 3 characters long"]
            },
            vehicleType:{
                type: String,
                required: true,
                enum: ["car","bike","auto"]
            }
        },
        location:{
            lat:{
                type: Number,
              
            },
            lng:{
                type: Number,
              
            },
        }
    }
)

captainSchema.methods.generateAuthToken = function() {
    // Generate a JWT token for the Captain using their unique _id
    const token = jwt.sign({ _id: this._id }, process.env.JWT_SECRET, { expiresIn: '24h' });
    return token;
}

captainSchema.methods.comparePassword = async function(password) {
    // Compare the provided plain-text password with the hashed password in the database
    return await bcrypt.compare(password, this.password);
}

captainSchema.statics.hashPassword = async function(password) {
    // Hash a plain-text password with a salt factor of 10 for secure storage
    return await bcrypt.hash(password, 10);
}

const captainModel = mongoose.model('Captain', captainSchema);

module.exports = captainModel;