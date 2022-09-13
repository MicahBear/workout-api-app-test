// need to pull infro database
const Workout = require('../models/workoutModel');
const mongoose = require('mongoose');

module.exports = {
    // add a workout
    postWorkout: async (request, response) => {
        // const { title, reps, load, likes } = request.body
        try {
            const data = await Workout.create({
                title: request.body.title,
                reps: request.body.reps,
                load: request.body.load,
                likes: 0,
            });
            response.status(200).json(data)


        } catch (error) {
            console.log(error);
        }
    },
    //grab a single workout
    singleWorkout: async (request, response) => {

        try {
            const singleWorkoutInfo = await Workout.findById({ _id: request.params.id })
            if (!singleWorkoutInfo) {
                return response.status(404).json({ error: 'no such workout' })
            }
            response.status(200).json(singleWorkoutInfo)
        } catch (error) {
            console.log(error);
        }
    },
    //update a single workout
    updateSingle: async (request, response) => {
        try {
            const updateInfo = await Workout.findByIdAndUpdate({ _id: request.params.id }, { ...request.body, $inc: { likes: 1 } })
            // await resposne by ID and update
            // will need to add $inc for increasing likes.. 
            // NEED update for many fields. 
            if (!updateInfo) {
                return response.status(400).json({ error: "no such workout" })
            }

            response.status(200).json(updateInfo)

        } catch (error) {
            console.log(error)
        }
    },
    //delete a single workout.
    deleteWorkout: async (request, response) => {

        try {
            const singleWorkoutInfo = await Workout.findById({ _id: request.params.id })
            if (!singleWorkoutInfo) {
                return response.status(404).json({ error: "no such workout" })
            }
            await Workout.deleteOne(singleWorkoutInfo)
            console.log("deleted workout");
            response.redirect('/');

        } catch (error) {
            console.log(error)
            // should probably have a redirect to root if error.
        }
    },
}