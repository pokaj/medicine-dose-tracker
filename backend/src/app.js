const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./api/database/db');
const userRoutes = require('./api/routes/user');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/user', userRoutes);


connectDB();


module.exports = app;