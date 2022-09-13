// need to pull infro database
const Workout = require('../models/workoutModel');

module.exports = {
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
    singleWorkout: async (request, response) => {

        try {
            // need to await response of single workout request with id and
            const singleWorkoutInfo = await Workout.findById({ _id: request.params.id })
            if (!singleWorkoutInfo) {
                return response.status(404).json({ error: 'no such workout' })
            }

            response.status(200).json(singleWorkoutInfo)
            //then put in render
        } catch (error) {
            console.log(error);
        }
    },
    updateSingle: async (request, response) => {
        try {
            // await resposne by ID and update
            // will need to add $inc for increasing likes.. 
            // NEED update for many fields. 

        } catch (error) {
            console.log(error)
        }
    },
    deleteWorkout: async (request, response) => {
        try {
            //need to grab workout by id from database await            

            // await delete workout from database

            //possible redirect to root.

        } catch (error) {
            console.log(error)
            // should probably have a redirect to root if error.
        }
    },
}