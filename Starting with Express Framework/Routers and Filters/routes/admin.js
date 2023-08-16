const express = require("express");
const routes = express.Router();
routes.get("/add-product", (req, res, next) => {
    console.log("Add product page");
    res.send(`
        <html>
            <body>
                <form action="message" method="POST">
                    <input type="text" name="title" placeholder="Enter your product"/>
                    <input type="number" name="size" placeholder="product size"/>
                    <button type="submit">Add to Cart</button>
                </form>
            </body>
        </html>
    `)
})
routes.post("/message", (req, res, next) => {
    console.log(req.body.title);
    console.log(req.body.size);
    res.redirect("/");
})
module.exports = routes;