const Express= require('express')
const app = Express();


// this is the ugly way of autenticating 
// if there will be more routes you will have to again write a seperate get request 
// which is not feasible 
app.get('/healthCheckup',(request,response)=>{

    const kidneyId= request.query.kidneyId;
    const username= request.headers.username;
    const password= request.headers.password;

    if (username!= "sarang" || password!="wow"){
        response.status(403).json({
            msg:"user credentials  not valid",
        });
        return;
    }
    if (kidneyId!=1 && kidneyId!=2){
        response.status(411).json({
            msg:"wow you have more than 2 kidneys ",
        });
        return;
    }
    response.send("your heartv is healthy ");

    })

    app.listen(5000);