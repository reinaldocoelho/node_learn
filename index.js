var express = require('express');
var app = express();
app.get('/', function(req, res){
    res.send('Bem vindo. você acessou a página inicial.');
});

var server = app.listen(8081, function(){
	console.log("servidor iniciado em localhost");
	//var server = server.address().host;
    //var port = server.address().port;
    //console.log("Servidor iniciado em http://%s:%s");
});
