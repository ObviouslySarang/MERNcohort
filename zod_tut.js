const express = require('express')
const zod = require('zod')

const app = express();
const z = zod;

function validateInput(obj){
    const schema = z.object({
        email : z.string(),
        username : z.string(),
        password : z.string(),
    })
    const response = schema.safeParse(obj);
    console.log(response);
    return response;
}


app.get('/validate',(req,res)=>{
        const response = validateInput(req.body);
        if (!(response.success))
            {
            res.send(" koi matlab hi ni h bc");
        }
        else {console.log("successful");
            res.json({msg:"auth successfull"});}
    })


app.listen(5000);
    



