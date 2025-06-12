// Loads environment variables from a .env file into process.env
require('dotenv').config()

// Imports mongoose library for MongoDB interaction
const mongoose = require('mongoose');

// Gets the MongoDB URI from environment variables.
const uri = process.env.MONGODB_URI;

// Corrected: fallback should be a valid MongoDB URI string
// const uri = process.env.MONGODB_URI || 'mongodb://localhost:27017/mydatabase';

// Attempts to connect to MongoDB using mongoose.connect
const connectDB = mongoose.connect(uri, { 
    useNewUrlParser: true,               
    useUnifiedTopology: true             
})
.then(() => {                            
    console.log('Connection to mongoDb successful.');
})
.catch((err) => {
    console.log('Error connecting to mongodb ', err)
});

// Exports the connectDB promise
module.exports = connectDB;
