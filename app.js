const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.setDefaultEncoding("Hello Wolrd");
});
app.listen(8000, function(){
    console.log("Servidor Rodando");
});
