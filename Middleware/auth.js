require('dotenv').config() // Loads environment variables from .env
const jwt = require('jsonwebtoken') // Imports jsonwebtoken library

const JWT_SECRET = process.env.JWT_SECRET; // Gets JWT secret from environment

const auth = (req, res, next) => {
    const authHeader = req.headers['authorization']; 

    // Checks if authHeader exists and starts with 'Bearer'
    if (!authHeader || !authHeader.startsWith('Bearer')) {
        return res.status(401).json({ error: "No token" })
    }

    // Extracts token from header
    const token = authHeader.split(' ')[1];
    try {
        // Verifies token using JWT_SECRET
        const decoded = jwt.verify(token, JWT_SECRET)
        req.user = decoded // Attaches decoded user to request
        next() // Proceeds to next middleware
    } catch (error) {
        // Handles invalid token
        res.status(403).json({ error: "Token not valid" })
    }
}

module.exports = auth; // Exports the auth middleware

