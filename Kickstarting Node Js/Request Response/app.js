const http = require("http");

http.createServer((req, res) => {
    // console.log(req.url,req.method,req.headers)
    if (req.url === "/home") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>This is Home Page</h1></body></html>")
        res.end();
    } else if (req.url === "/about") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>This is AboutUs Page</h1></body></html>")
        res.end();
    } else if (req.url === "/node") {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>This is Node Project Page</h1></body></html>")
        res.end();
    } else {
        res.setHeader("Content-Type", "text/html");
        res.write("<html><body><h1>This is Unknown Page</h1></body></html>")
        res.end();
    }
}).listen(4000)