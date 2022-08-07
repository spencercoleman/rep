const User = require('../models/userModel');

const login = async (req, res) => {
    res.json({message: 'Log in'});
}

const signup = async (req, res) => {
    res.json({message: 'Sign up'});
}

module.exports = { login, signup };