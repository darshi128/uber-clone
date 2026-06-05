const userModel = require('../models/user.model');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const blackListModel = require('../models/blacklist.model');
const captainModel = require('../models/captain.model');

module.exports.authuser = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    const isBlacklisted = await blackListModel.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message: "Unauthorized"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const user = await userModel.findById(decoded._id);

        req.user = user;
        next();
    }
    catch(err){
        return res.status(401).json({message: "Unauthorized"});
    }
}

module.exports.authCaptain = async (req, res, next) => {
    const token = req.cookies.token || req.headers.authorization?.split(' ')[1];
    if(!token){
        return res.status(401).json({message: "Unauthorized"});
    }

    const isBlacklisted = await blackListModel.findOne({token:token});
    if(isBlacklisted){
        return res.status(401).json({message: "Unauthorized"});
    }

    try{
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        const captain = await captainModel.findById(decoded._id);

        req.captain = captain;
        next();
    }
    catch(err){
        return res.status(401).json({message: "Unauthorized"});
    }
}