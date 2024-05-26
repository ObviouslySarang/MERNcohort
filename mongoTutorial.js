// TO_DO 
// endpoint 1 - /signup , where the user give { username , password , firstname }
// endpoint 2 - /signin , which checks if the user exists or not , give token {jwt} if exists
// endpoint 3 - /users , where we expect a header and hit the database to fetch the user being asked for 
const express = require("express");
const mongoose = require("mongoose");

const app = express();

app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true }));

mongoose.connect("mongodb+srv://ObviouslySarang:1234@cluster0.b8cmdfq.mongodb.net/wow")

const User = mongoose.model("Users",
{       Firstname:String,
        password:String,
        name:String
});
app.post("/signup",async function(req,res){

    const username = req.body.Firstname;
    const password = req.body.password;
    const name = req.body.name;

    const existingUser = await User.findOne({Firstname:username});

    if (existingUser){
        return res.status(400).send("user already exists");
    }
    const user = new User ({
        Firstname:username,
        name:name,
        password:password
    });
   
    user.save();

    res.json({"msg":"user created successfully"});
})

app.listen(5000);




