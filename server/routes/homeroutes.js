const express = require('express');
const router = express.Router();
const homeController = require('../controllers/home');

// get all workouts
router.get('/', homeController.getWorkouts)

module.exports = router;

