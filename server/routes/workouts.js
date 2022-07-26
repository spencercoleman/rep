const express = require('express');
const { 
    getWorkouts,
    getWorkout, 
    createWorkout,
    updateWorkout,
    deleteWorkout
} = require('../controllers/workoutController');

const router = express.Router();

router.get('/', getWorkouts);
router.get('/:id', getWorkout);
router.post('/', createWorkout);
router.patch('/:id', updateWorkout);
router.delete('/:id', deleteWorkout);

module.exports = router;