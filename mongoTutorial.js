// TO_DO 
// endpoint 1 - /signup , where the user give { username , password , firstname }
// endpoint 2 - /signin , which checks if the user exists or not , give token {jwt} if exists
// endpoint 3 - /users , where we expect a header and hit the database to fetch the user being asked for 

const mongoose = require("mongoose");

//mongoose.connect("mongodb+srv://userappnew:ebNznJitjMBU2oUr@cluster0.oqrqo4f.mongodb.net/")
mongoose.connect("mongodb://admin:1234@cluster0.oqrqo4f.mongodb.net:27017/")
const Users = mongoose.model("users",
    {name:String,
     password:String,
     Firstname:String
    });

const user = new Users ({
    name:"Sarang Dixit",
    password:"2442",
    Firstname:"Sarang"
});

user.save();


