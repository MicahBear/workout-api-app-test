// register express
const express = require('express');
require('dotenv').config();
const cors = require('cors')
const mongoose = require('mongoose');
const connectDB = require('./config/database');
const workoutRoutes = require('./routes/workoutroutes');
const homeRoutes = require('./routes/homeroutes');
// creating express app for us.
const app = express();

//connect DB
connectDB();

//middleware - body parsing
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
//middleware - global
app.use((request, response, next) => {
    //everytime we get a request we are going to log out the path
    console.log(request.path, request.method)
    next()
});

//routing requests
app.use(cors())
app.use('/', homeRoutes);
app.use('/workouts', workoutRoutes)


// listening for request
app.listen(process.env.PORT, () => {
    console.log('server is listening')
});