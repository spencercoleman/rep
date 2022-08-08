const User = require('../models/userModel');
const jwt = require('jsonwebtoken');

const createToken = (id) => {
    return jwt.sign({_id: id}, process.env.SECRET, {});
}

const login = async (req, res) => {
    const {email, password} = req.body;

    try {
        // Add user to db
        const user = await User.login(email, password);

        // Create a token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

const signup = async (req, res) => {
    const {email, password} = req.body;

    try {
        // Add user to db
        const user = await User.signup(email, password);

        // Create a token
        const token = createToken(user._id);

        res.status(200).json({email, token});
    }
    catch (error) {
        res.status(400).json({error: error.message});
    }
}

module.exports = { login, signup };