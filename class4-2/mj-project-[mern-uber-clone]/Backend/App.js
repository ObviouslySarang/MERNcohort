const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');

const app = express();
const cookieParser = require('cookie-parser');

const userRouter = require('./routes/user.routes');
const captainRouter = require('./routes/captain.routes');


const connectToDB = require('./db/db');
connectToDB();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());
app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

app.use('/users', userRouter);
app.use('/captains', captainRouter);

module.exports = app;