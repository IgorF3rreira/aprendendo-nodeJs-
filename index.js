const express = require("express");
const app = express();


 
app.get("/", function (req,res){

    //dirname trazz o diretório raiz da aplicação

    res.sendFile(__dirname + "/html/index.html")

})

app.get("/sobre", function (req,res){

    res.sendFile(__dirname + "/html/sobre.html");

})

app.get('/ola/:nome/:cargo', function(req, res){
    res.send("<h2> Ola " + req.params.nome+"</h2>" + 
    "<h3> Seu cargo é: " + req.params.cargo+"</h3>");
})


app.listen(8081, function () {
    console.log("servidor rodando na url http://localhost:8081")
});