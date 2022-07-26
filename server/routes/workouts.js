const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
    res.json({ message: 'Getting all workouts' });
});

router.get('/:id', (req, res) => {
    res.json({ message: 'Getting single workout' });
});

router.post('/', (req, res) => {
    res.json({ message: 'New workout posted' });
});

router.delete('/:id', (req, res) => {
    res.json({ message: 'Workout deleted' });
});

router.patch('/:id', (req, res) => {
    res.json({ message: 'Workout updated' });
});

module.exports = router;