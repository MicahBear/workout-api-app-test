const Workout = require('../models/workoutModel');

module.exports = {
    getWorkouts: async (req, res) => {
        try {
            const workoutInfo = await Workout.find({}).sort({ createdAt: -1 })
            res.json(workoutInfo)

        } catch (error) {

        }

    },
};