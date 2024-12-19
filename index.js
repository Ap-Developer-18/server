const express = require('express');
const app = express();
const PORT = 8000;

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

// Start the server
app.listen(PORT, () => console.log(`Server started at PORT: ${PORT}`));