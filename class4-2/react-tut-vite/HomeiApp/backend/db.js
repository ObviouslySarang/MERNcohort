/*  ToDo {
title: string;
description: string;
completed: boolean;
} */
const mongoose = require('mongoose');

mongoose.connect('mongodb+srv://sarang22gcebaids006:KvW4hoFwNcTtKD4Z@cluster0.9ncu3.mongodb.net/TODO'  );

const todoSchema =  mongoose.Schema({
    title: String,
    description: String,
    completed: Boolean
});
const Todo = mongoose.model('Todo', todoSchema);
module.exports = Todo;