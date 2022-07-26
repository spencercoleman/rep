require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const app = express();
const exerciseRoutes = require('./routes/exercises');
const workoutRoutes = require('./routes/workouts');

app.use(express.json());

app.use(logger('dev'));

app.use('/api/exercises', exerciseRoutes);
app.use('/api/workouts', workoutRoutes);

mongoose.connect(process.env.DB_URI)
    .then(() => {
        app.listen(process.env.PORT, () => {
            console.log(`Listening on port ${process.env.PORT}`);
        });
    })
    .catch(err => {
        console.error(err);
    }
);