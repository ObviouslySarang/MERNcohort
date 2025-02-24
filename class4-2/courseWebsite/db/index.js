const mongoose = require ('mongoose');
const { string } = require('zod');

//connecting to mongodb
mongoose.connect("mongodb+srv://sarang22gcebaids006:KvW4hoFwNcTtKD4Z@cluster0.9ncu3.mongodb.net/course_sellin_shit");

//SCHEMAS 

const AdminSchema = new mongoose.Schema({ 
    username:String,
    password:String
});
const UserSchema = new mongoose.Schema({
    username:String,
    password:String,
    purchasedCourses:[{
        type:mongoose.Schema.Types.ObjectId,
        ref : 'Course'
    }]
}); 
const CourseSchema = new mongoose.Schema({
    title:String,
    description:String,
    imageLink:String,
    price:Number
});

// creating model for the schemas 

const Admin = mongoose.model('Admin' ,AdminSchema);
const User = mongoose.model('User' ,UserSchema);
const Course = mongoose.model('Course' ,CourseSchema);


// exporting 
module.exports = {
    Admin,
    User,
    Course
}