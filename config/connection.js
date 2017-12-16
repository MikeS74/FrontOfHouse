var mysql = require("mysql");

var connection = mysql.createConnection({
    port: 3306,
    host: "tk3mehkfmmrhjg0b.cbetxkdyhwsb.us-east-1.rds.amazonaws.com" || "localhost",
    user: "pwvoanfy2qw656ec" || "root",
    password: "vb917xzh86qhzhv0" || "FreshChoice1",
    database: "az79wz9xcivnfxl1" || "frontOfHouse"
});

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});
module.exports = connection;