const dotenv = require('dotenv');
dotenv.config();
const express = require('express');
const cors = require('cors');

app.use(cors());

const app = express();

app.get('/', (req, res) => {
  res.send('Hello World!');
}); 

module.exports = app;