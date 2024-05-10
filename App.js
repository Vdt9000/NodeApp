const express = require('express');
const app = express();
const PORT = 3000;


app.get('/carregador-iphone', (req, res) => {
    res.send('Carregador Iphone');

});

app.get('/carregador-universal', (req, res) => {
    res.send('Carregador!');

});

app.get('/fone-de-ouvido', (req, res) => {
    res.send('Fone de ouvido');

});

app.get('/suporte', (req, res) => {
    res.send('Suporte ');

});


app.listen(3000, () => {
    console.log(`Servidor rodando em http://localhost:${3000}`);
});
