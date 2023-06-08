const express = require('express');
const path = require('path');
const { escape } = require('querystring');

const app = express();

const publicpath = path.resolve(__dirname, './public');
app.use( express.static(publicpath) );

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/index.html'));
});

app.get('/register', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/register.html'));
});

app.get('/login', (req, res) => {
    res.sendFile(path.resolve(__dirname, './views/login.html'));
});

app.listen(3000, () => {
    console.log("Servidor corriendo en el puerto 3000");
});
