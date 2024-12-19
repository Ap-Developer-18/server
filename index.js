const express = require('express');
const app = express();

// Import the JSON data with error handling
let data;
try {
    data = require('./data.json');
} catch (error) {
    console.error('Error loading data.json:', error.message);
    data = [];
}

// Create route to serve the courses data
app.get('/data/api', (req, res) => {
    res.json(data);
});

module.exports = app;