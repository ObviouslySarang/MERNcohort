// TO_DO 
// endpoint 1 - /signup , where the user give { username , password , firstname }
// endpoint 2 - /signin , which checks if the user exists or not , give token {jwt} if exists
// endpoint 3 - /users , where we expect a header and hit the database to fetch the user being asked for 

const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://ObviouslySarang:1234@cluster0.b8cmdfq.mongodb.net/wow")
const User = mongoose.model("Users",
    {
            name:String,
            password:String,
            Firstname:String
    });

const user = new User ({
    name:"Sarang Dixit",
    password:"2442",
    Firstname:"Sarang"
});

user.save();


