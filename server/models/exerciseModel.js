const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
    name: {
        type: String,
        required: true
    },    
    force: {
        type: String,
        required: true
    },
    instructions: {
        type: String,
        required: true
    },
    category: {
        type: String,
        required: true
    },
}, { timestamps: true });
 
module.exports = mongoose.model('Exercise', exerciseSchema);