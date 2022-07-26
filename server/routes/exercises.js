const express = require('express');
const { 
    getExercises,
    getExercise, 
    createExercise 
} = require('../controllers/exerciseController');

const router = express.Router();

router.get('/', getExercises);

router.get('/:id', getExercise);

router.post('/', createExercise);

router.delete('/:id', (req, res) => {
    res.json({ message: 'Workout deleted' });
});

router.patch('/:id', (req, res) => {
    res.json({ message: 'Workout updated' });
});

module.exports = router;