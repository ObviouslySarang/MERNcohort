const {Admin} = require("../db/index")
const jwt = require("jsonwebtoken")
const {JWT_SECRET} = require("../config.js")
// middleware for -----  admin authentation --- without jwt authentication 
// thus only process username and password from the header 


// function adminMiddleware(req,res,next){

//     const username = req.headers.username;
//     const password = req.headers.password;

//     Admin.findOne({
//         username:username,
//         password:password
//     }).then(function(value){
//         if (value){
//             next();
//         }
//         else {
//             res.status(403).json({
//                 msg:"Admin Dosent Exist"
//             })
//         }
//     })
     
// }


// middleware for the admin authentication of the data send by the post request  -- with help of jwt

function adminMiddleware(req,res,next) {
    const token = req.headers.authorization;
    const words = token.split(" ");
    const jwtToken = words[1];
    try {
        const decodedValue = jwt.verify(jwtToken, JWT_SECRET);
        if(decodedValue.username){
            next();
        }else{
            res.status(403).json({
                msg:"You are not authenticated"
            })
    }
    } catch (e) {
        res.json({
            msg:"incorrect inputs "
        })
    }
    
 }


module.exports = adminMiddleware;