const express = require("express");
const routes = express.Router();

routes.get("/",(req,res)=>{
    console.log("home page")
    res.send("<html><body><h1>Home page</h1></body></html>")
})

module.exports = routes;