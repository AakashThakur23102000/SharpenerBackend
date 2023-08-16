const express = require("express");
const bodyParser = require("body-parser");

const adminRoutes  =  require("./routes/admin");
const shopRoutes = require("./routes/shop");
// express is a function which we run and store it in app
const app = express();

// body parser middleware is written before routes 
// trainer taughet extended false but due to new update we set it true
app.use(bodyParser.urlencoded({extended:true})); 


// routes
// app.use can be used for routing alse
//this code runs always
// app.use("/",(req,res,next)=>{
//     console.log("Page is working");
//     next();
// }) 

// add product route
app.use("/admin",adminRoutes);   
//   "/" page 
app.use(shopRoutes);
// 404 page 
app.use((req,res,next)=>{
    res.status(404).send(
        `<html><body><h1>Page not Found</h1></body></html>`
    )
})


app.listen(4000);