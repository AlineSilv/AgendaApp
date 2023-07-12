//getUsers da api
//const getUsers = require("aplication-agenda/api/routes/users");

const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3001;

const  morganBody = require('morgan-body');
const fs = require('fs');
const path = require('path');



app.use(bodyParser.json());

const log = fs.createWriteStream(
    path.join(__dirname, "./logs", "register.log"), {flags: "a"}
);

morganBody(app,{
    noColors:true,
    stream: log
})

app.get('/', (req,res) => {
    res.send(' monitorando');
});


// getUsers da api
//app.get('', getUsers (req, res))


app.listen(port, () => {
    console.log(`Porta ${port}`);
})