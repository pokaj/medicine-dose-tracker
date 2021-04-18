const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');

const connectDB = require('./api/database/db');
const userRoutes = require('./api/routes/user');
const medicationRoutes = require('./api/routes/medication');

app.use(morgan('dev'));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use('/api/user', userRoutes);
app.use('/api/medication', medicationRoutes);

connectDB();

// Middleware for non-existing routes
app.use((req,res,next)=>{
    const error = new Error('Not Found');
    error.status = 404;
    next(error);
});

//Middleware for handling all kinds of errors in the application.
app.use((error, req, res, next)=>{
    res.status(error.status || 500);
    res.json({error:{message:error.message}});
});



module.exports = app;