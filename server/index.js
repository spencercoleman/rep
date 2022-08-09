require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const exerciseRoutes = require('./routes/exercises');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');
const PORT = process.env.PORT || 8888;

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, '../client/build')));

app.use(logger('dev'));

app.use('/api/exercises', exerciseRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
})

mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Listening on port ${PORT}`);
        });
    })
    .catch(err => {
        console.error(err);
    }
);