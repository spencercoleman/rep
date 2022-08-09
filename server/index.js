require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const logger = require('morgan');
const path = require('path');
const exerciseRoutes = require('./routes/exercises');
const workoutRoutes = require('./routes/workouts');
const userRoutes = require('./routes/users');

const app = express();

app.use(express.json());

app.use(express.static(path.resolve(__dirname, './client/build')));

app.use(logger('dev'));

app.use('/api/exercises', exerciseRoutes);
app.use('/api/workouts', workoutRoutes);
app.use('/api/users', userRoutes);

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