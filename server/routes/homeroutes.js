const express = require('express');
const cors = require('cors')
const router = express.Router();
const homeController = require('../controllers/home');
router.use(cors())
// get all workouts
router.get('/', homeController.getWorkouts)

module.exports = router;

