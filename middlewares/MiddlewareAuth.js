const jwt = require("jsonwebtoken");
const ConfigCTA = require("../config/ConfigCTA");
const MiddlewareAuth = {};

MiddlewareAuth.requiredToken = async (req, res, next) => {
    const token = 
    req.body.token ||
    req.query.token ||
    req.headers["x-acces-token"] ||
    req.headers["Authorization"];

    if (!token) {
        return res.status(401).json(ConfigCTA.CTA_MESSAGE_TOKEN_ERROR);
    }

    try {
        const decodeToken = jwt.verify(token, process.env.TOKEN_KEY);
        console.log(decodeToken);
        req.user = decodeToken;    
    } catch (error) {
        return res.status(401).json(ConfigCTA.CTA_MESSAGE_TOKEN_INVALID);
    }

    return next();
};

module.exports = MiddlewareAuth;