const Express= require('express')
//const zod = require('zod')
const app = Express();
//const z = zod;

app.use(Express.json());//this middleware is used to tell that the body is expected as a json obj and to get it parsed accordingly

// this is the ugly way of autenticating 
// if there will be more routes you will have to again write a seperate get request authentication 
// which is not feasible in the long run 
// app.get('/healthCheckup',(request,response)=>{

//     const kidneyId= request.query.kidneyId;
//     const username= request.headers.username;
//     const password= request.headers.password;

//     if (username!= "sarang" || password!="wow"){
//         response.status(403).json({
//             msg:"user credentials  not valid",
//         });
//         return;
//     }
//     if (kidneyId!=1 && kidneyId!=2){
//         response.status(411).json({
//             msg:"wow you have more than 2 kidneys ",
//         });
//         return;
//     }
//     response.send("your heart is healthy ");

//     })


//  {   ASSIGNMENT - count the number of requests and display  }

let requestCount = 0;
// this is better way of handling auth and middleware checks for individual routes 
// a middleware always have a next function to execute the next callback function of the request api
function countReq(req,res,next){//a middleware to count the no of requests
    requestCount++;
    res.json({"no of request received":requestCount,});
    next();
}

function validateInput(obj){
    const schema = z.object({
        email : z.string().email(),
        username : z.string().min(5),
        password : z.string().min(6),
    })
    const response = schema.safeParse(obj);

    //console.log(response);
    return response;
}
app.get('/count',countReq,(req,res)=>{
        res.status(200).json({
            msg:req.headers.user,
        })
})
// app.get('/validate',(req,res)=>{
//     const response = validateInput(req.body);
//     if (!response.success)
//         {
//         res.send(" koi matlab hi ni h bc");
//     }
//     else {console.log("successful");
//         res.json({msg:"auth successfull"});}
// })

    app.listen(5000);