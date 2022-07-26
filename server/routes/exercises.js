const express = require('express');
const { 
    getExercises,
    getExercise, 
    createExercise,
    updateExercise,
    deleteExercise
} = require('../controllers/exerciseController');

const router = express.Router();

router.get('/', getExercises);
router.get('/:id', getExercise);
router.post('/', createExercise);
router.patch('/:id', updateExercise);
router.delete('/:id', deleteExercise);

module.exports = router;