const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

//#region  Configurações iniciais
const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
//#endregion

var array = [];

app.get('/listar', (req, res) => {
    res.status(200).send(array);
});

app.post('/cadastrar', (req, res) => {
    try {

        array.push(req.body);
        res.status(201).send(array);

    } catch (error) {
        res.status(500).send(error);
    }
});

app.listen(3030, () => {
    console.log("Servidor rodadno na porta 3030");
});