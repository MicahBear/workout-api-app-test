// register express
const express = require('express');
require('dotenv').config();
const workoutRoutes = require('./routes/workoutroutes');
const homeRoutes = require('./routes/homeroutes');


// creating express app for us.
const app = express();

//middleware - global
app.use((request, response, next) => {
    //everytime we get a request we are going to log out the path
    console.log(request.path, request.method)
    next()
});

//routing requests
app.use('/', homeRoutes);
app.use('/workouts', workoutRoutes)


// listening for request
app.listen(process.env.PORT, () => {
    console.log('server is listening')
});