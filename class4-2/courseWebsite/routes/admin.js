const express = require("express");
const adminMiddleware = require("../middleware/Admin");
const {Admin} = require("../db");
const {Course} = require("../db");

const router = express.Router();

// ADMIN routes
router.post('/signup', async (req,res)=>{

    //admin signup
    const username = req.headers.username;
    const password = req.headers.password;
    
    await Admin.create({
        username,
        password
    })
    res.json({
        message:"Admin successfully created"
    })
});
router.post('/courses',adminMiddleware,async(req,res)=>{
    // creation 
    const title = req.body.title;
    const description = req.body.description;
    const imageLink = req.body.imageLink;
    const price = req.body.price;

    const newcourse = await Course.create({
        title,
        description,
        imageLink,
        price
    })
    res.json({
        message:"course created successfully",
        courseId: newcourse._id
    })
});
router.get('/courses',adminMiddleware,async (req,res)=>{
    // fetch all courses
    const allcourses = await Course.find({});

    res.json(allcourses)
    
});

module.exports = router;