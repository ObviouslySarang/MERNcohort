// TO_DO 
// endpoint 1 - /signup , where the user give { username , password , firstname }
// endpoint 2 - /signin , which checks if the user exists or not , give token {jwt} if exists
// endpoint 3 - /users , where we expect a header and hit the database to fetch the user being asked for 

const mongoose = require("mongoose");

//mongoose.connect("mongodb+srv://userappnew:ebNznJitjMBU2oUr@cluster0.oqrqo4f.mongodb.net/")
mongoose.connect("mongodb+srv://sarang:F$**Akk8F#oU2p3863fto@cluster0.aldmcjq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0")
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


