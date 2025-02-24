const express = require("express");
const bodyParser = require("body-parser");

const app = express();

const adminRouter = require("./routes/admin");
const userRouter = require("./routes/user");

//middlewares
app.use(bodyParser.json());

app.use("/admin",adminRouter);
app.use("/user",userRouter);

const PORT = 7000;

app.listen(PORT,()=>{
    console.log(`server is running at PORT ${PORT}`);

})



