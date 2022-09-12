// need to pull infro database
const Workout = require('../modles/Workout');

module.exports = {
    postWorkout: async (request, resposne) => {
        try {




        } catch (error) {
            console.log(error);
        }
    },
    singleWorkout: async (request, resposne) => {
        try {
            // need to await response of single workout request with id and

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