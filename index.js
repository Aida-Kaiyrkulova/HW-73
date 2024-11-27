const express = require('express');

const app = express();
const port = 8000;

app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/:message', (req, res) => {
    return res.send(`${req.params.message}`);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});