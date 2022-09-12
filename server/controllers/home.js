const { response } = require("express");

module.exports = {
    getWorkouts: (req, res) => {
        res.json({ mssg: 'GET all workouts' })
    },
};