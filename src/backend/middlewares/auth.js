const jwt = require('jsonwebtoken');
const User = require('../models/user');
const ErrorResponse = require('../utils/errorResponse');

exports.protect = async (req, res, next) => {
    let token;

    if(req.headers.authorization && req.headers.authorization.startsWith("Bearer")) {
        token = req.headers.authorization.split(" ")[1];
    }

    if(!token) {
        return next(new ErrorResponse("Not Authorized", 401));
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);

        const user = await User.findById(decoded.id);

        if(!user) {
            return next(new ErrorResponse("No User Found with this id", 404));
        }

        req.user = user;

        next();
    } catch (err) {
        return next(new ErrorResponse("Not Authorized", 401));
    }
};