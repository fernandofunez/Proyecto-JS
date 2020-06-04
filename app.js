const express = require("express");

const server = express();

const docs = express.static("docs")

const port = process.env.PORT || 80

server.use( docs )

server.get("/index.html", function(request,response){
    response.end("hola desde Node.js + Express");
});

server.get("/mercadotech.html", function(request,response){
    response.end("aca debo ver el catalogo")
})


//server.post("")

server.listen(port)