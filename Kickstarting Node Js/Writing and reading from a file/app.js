const http = require("http");
const fs = require("fs");

http.createServer((req, res) => {
    // for home page
    if (req.url === "/") {
        res.setHeader("Content-Type", "text/html");
        res.write(
            `
            <html>
                <body>
                    <form action="/message" method="POST"> 
                        <input type="text" name="message" placeholder="Enter some text" />
                        <button type="submit">Submit</button>
                    </form>
                </body>
            </html>
            `
        )
        return res.end();
    }

    // for message page
    if (req.url === "/message" && req.method === "POST") {
        var body = [];
        // now here the request contain data so we add a listner
        // listenere ends at the end of the syncronised compilation is done after that it runs async code that why we 
        // return our last end
        req.on("data", (chunk) => {
            body.push(chunk)
        })
        console.log(body);
        return req.on("end", () => {
            const parsedBody = Buffer.concat(body).toString().split("=");
            fs.writeFile("message.txt", parsedBody[1], (err) => {
                res.statusCode = 302;
                res.setHeader("Location", "/");
                return res.end();
            });
        })
    }



    res.setHeader("Content-Type", "text/html");
    res.write(`<h1>This is home page</h1>`)
    res.end();
}).listen(4000);