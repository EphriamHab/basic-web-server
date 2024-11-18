const express = require('express');
const app = express();
const port = 5000;

// Route: /name
app.get('/name', (req, res) => {
    res.status(200).send('Ephrem Habtamu.');
});

// Route: /hobby
app.get('/hobby', (req, res) => {
    res.status(200).json({ hobby: 'Reading book and Listening music' });
});

// Route: /dream
app.get('/dream', (req, res) => {
    res.status(200).send('My dream is to build impactful software solutions that change lives.');
});

app.listen(port, () => {
    console.log(`Server is running at http://0.0.0.0:${port}`);
});
