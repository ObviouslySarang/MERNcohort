const express = require("express");
const userMiddleware = require("../middleware/User");
const { User,Course } = require("../db");
const { default: mongoose } = require("mongoose");
const router = express.Router();

// user routes
router.post('/signup',async (req,res)=>{
    //user signup
    const username = req.headers.username;
    const password = req.headers.password;
    
    await User.create({
        username,
        password
    })
    res.json({
        message:"user created successfully"
    })
})


router.get('/courses',userMiddleware,async(req,res)=>{
    // fetch all courses
    const allcourses = await Course.find({});

    res.json(allcourses)
     
})


router.post('/courses/:courseId',userMiddleware,async (req,res)=>{
    // course purchase logic 
    const courseId = req.courseId;
    const username = req.username;

    await User.updateOne({
        username:username
    },{

        "$push":{
            //purchasedCourses : new mongoose.Types.ObjectId(courseId)
            purchasedCourses : courseId
        }
    })
    res.json({
        message:"Purchase Complete"
    })
})

router.get('/purchasedCourses',userMiddleware,async (req,res)=>{

    const user = await User.findOne({
        username : req.headers.username
    })

    const courses = await Course.find({
        _id : {
            "$in":user.purchasedCourses
        }
    })
    console.log(user.purchasedCourses);
    res.json({
        courses : courses
    })
})


module.exports = router;