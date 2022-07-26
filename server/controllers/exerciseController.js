const Exercise = require('../models/exerciseModel');
const mongoose = require('mongoose');

const getExercises = async (req, res) => {
    try {
        const exercises = await Exercise.find().sort({name: 1});
        res.status(200).json(exercises);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

const getExercise = async (req, res) => {
    const {id} = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Document not found'});
    }

    const exercise = await Exercise.findById(id);

    if (!exercise) {
        return res.status(404).json({error: 'Document not found'});
    }

    res.status(200).json(exercise);
}

const createExercise = async (req, res) => {
    const { name, category, force, instructions } = req.body;

    try {
        const exercise = await Exercise.create({ name, category, force, instructions });
        res.status(200).json(exercise);
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

const updateExercise = async (req, res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Document not found'});
    }

    const exercise = await Exercise.findOneAndUpdate({_id: id}, {
        ...req.body
    }, {new: true});

    if (!exercise) {
        return res.status(404).json({error: 'Document not found'});
    }

    res.status(200).json(exercise);
}


const deleteExercise = async (req, res) => {
    const {id} = req.params;
    
    if (!mongoose.Types.ObjectId.isValid(id)) {
        return res.status(404).json({error: 'Document not found'});
    }

    const exercise = await Exercise.findOneAndDelete({_id: id});

    if (!exercise) {
        return res.status(404).json({error: 'Document not found'});
    }

    res.status(200).json(exercise);
}

module.exports = { getExercises, getExercise, createExercise, updateExercise, deleteExercise };