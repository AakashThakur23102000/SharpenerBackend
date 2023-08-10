const http = require("http");

// creating a server 
http.createServer(function(req,res){
    // console.log(req);
    console.log("Aakash")
    res.end("Hii")
}).listen(4000)