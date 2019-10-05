var express = require('express'); 
var bodyParser = require('body-parser'); 
var app = express();

app.use(bodyParser.json());

app.get('/v1/public/creditCards', function(req, res){
    res.status(200).send(true);
});

app.listen(8084, function() {
	console.log('Servidor rodando na porta 8084.');
});