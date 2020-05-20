const express = require("express");

const server = express();

const docs = express.static("docs")



server.use( docs )

server.get("/index.html", function(request,response){
    response.end("hola desde Node.js + Express");
});

server.get("/mercadotech.html", function(request,response){
    response.end("aca debo ver el catalogo")
})


//server.post("")

server.listen(80)