const express = require("express");
const db = require("./utils/MYSQLdatabase");

const app = express();

app.get("/dbconnect", (req, res, next) => {
    async function fetchDataDB(db) {
        var output = await (await db).execute("select * from student")
        console.log(output);
    }
    fetchDataDB(db);
    res.send("DB CONNECT PAGE")
})

app.get("/", (req, res, next) => {
    res.send("<h1>THIS IS HOME PAGE</h1>")
})

app.listen(3000, () => {
    console.log("Server is running........")
})