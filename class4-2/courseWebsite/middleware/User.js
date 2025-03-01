const {User} = require('../db/index');
const {JWT_SECRET} = require("../config.js");

// middleware for user authentation 
// function userMiddleware(req,res,next){
    
//     const username = req.headers.username;
//     const password = req.headers.password;

//     User.findOne({
//         username:username,
//         password:password
//     }).then(function(value){
//         if (value){
//             next();
//         }
//         else {
//             res.status(403).json({
//                 msg:"User Dosent Exist"
//             })
//         }
//     })
// }

// middleware for the user authentication of the data send by the post request  -- with help of jwt

function userMiddleware(req,res,next) {
    const token = req.headers.authorisation;
    const words = token.split(" ");
    const jwtToken = words[1];
    const decodedValue = jwt.verify(jwtToken, JWT_SECRET);

    if(decodedValue.username){

        req.username = decodedValue.username;
        
        next();
    }else{
        res.status(403).json({
            msg:"You are not authenticated"
        })
    }
 }
module.exports = userMiddleware;