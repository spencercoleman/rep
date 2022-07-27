const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    duration: {
        type: Number,
        required: true
    },
    exercises: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Exercise', 
        required: true 
    }],
    weights: [{ 
        type: Number, 
        required: true 
    }],
    reps: [{ 
        type: Number, 
        required: true 
    }],
    sets: [{ 
        type: Number, 
        required: true 
    }],
    notes: { 
        type: String
    }
}, { timestamps: true });
 
module.exports = mongoose.model('Workout', workoutSchema);