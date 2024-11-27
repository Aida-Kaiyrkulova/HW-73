const express = require('express');
const Vigenere = require('caesar-salad').Vigenere;

const app = express();
const port = 8000;


app.get('/', (req, res) => {
    return res.send('Home page');
});

app.get('/:message', (req, res) => {
    return res.send(`${req.params.message}`);
});

const password = 'celebrity';

app.get('/encode/:text', (req, res) => {
    const text= req.params.text;
    const codedText = Vigenere.Cipher(password).crypt(text);
    return res.send(codedText);
});

app.get('/decode/:text', (req, res) => {
    const text= req.params.text;
    const decodedText = Vigenere.Decipher(password).crypt(text);
    return res.send(decodedText);
});

app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`);
});