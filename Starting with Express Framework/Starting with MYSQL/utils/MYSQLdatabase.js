const mysql = require("mysql2");

const poll = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    database:"nodedatabase",
})

module.exports = poll.promise();