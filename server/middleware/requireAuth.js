const jwt = require('jsonwebtoken');
const User = require('../models/userModel');

const requireAuth = async (req, res, next) => {
    // Verify auth
    const {authorization} = req.headers;

    if (!authorization) {
        return res.status(401).json({ error: 'Authorization token required.'});
    }

    // Grab token from header and verify
    const token = authorization.split(' ')[1];

    try {
        // Verify and destructure user ID from token
        const {_id} = jwt.verify(token, process.env.SECRET);

        // Find user using ID from verified token
        req.user = await User.findOne({_id}).select('_id');
        
        next();
    }
    catch (error) {
        console.error(error);
        res.status(401).json({error: 'Unauthorized request.'});
    }
}

module.exports = requireAuth;