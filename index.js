const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3000;
const router = require('./src/routes/index.js');
const testeConnection = require('./src/database/index');

app.use(bodyParser.json());

router(app);

app.get('/', function (req, res) {
    testeConnection
      .authenticate()
      .then(() => {
        console.log('Conectado com sucesso')
        res.send('Conectado com sucesso')
      })
      .catch((err) => {
        console.log('Erro ao conectar: ' + err)
        res.send('Erro ao conectar: ' + err)
      })
  })

app.listen(port, (error)=>{
    if(error){
        console.log("Erro");
        return;
    }
});

module.exports = app