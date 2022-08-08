const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const validator = require('validator');

const Schema = mongoose.Schema;

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    }
});

userSchema.statics.signup = async function(email, password) {
    // Validate email and password
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }

    if (!validator.isEmail(email)) {
        throw new Error('Email is not valid');
    }

    const exists = await this.findOne({ email });

    if (exists) {
        throw new Error('Email is already in use');
    }

    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await this.create({
        email,
        password: hash
    });

    return user;
}

userSchema.statics.login = async function(email, password) {
    // Validate email and password
    if (!email || !password) {
        throw new Error('All fields must be filled');
    }

    const user = await this.findOne({ email });

    if (!user) {
        throw new Error('Invalid username or password');
    }

    const match = await bcrypt.compare(password, user.password);

    if (!match) {
        throw new Error('Invalid username or password');
    }

    return user;
}

module.exports = mongoose.model('User', userSchema);