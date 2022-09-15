const express = require('express');
const cors = require('cors')
const router = express.Router();
const workoutController = require('../controllers/workouts')

router.use(cors)
// create workout
router.post('/', workoutController.postWorkout);

//get a single workout
router.get('/:id', workoutController.singleWorkout);

//delete a single workout
router.delete('/:id', workoutController.deleteWorkout);

//update single workout
router.patch('/:id', workoutController.updateSingle);


module.exports = router;