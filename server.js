// requires mysql and inquirer node packages
var mysql = require("mysql");
var inquirer = require("inquirer");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    // Your username
    user: "root",

    // Your password
    password: "FreshChoice1",
    database: "frontOfHouse",
    multipleStatements: true

});

 connection.connect(function(err) {
   if (err) throw err;
   console.log("connected as id " + connection.threadId + "\n");
   createProduct();
     
     
function createProduct() {
  console.log("Inserting a new product...\n");
  var query = connection.query(
    "INSERT INTO reviews SET ?",
    {
      api_id: 300,
      user_id: 6,
      user_name: "Dave",
        review: "This place is wack"
    
    },
    function(err, res) {
      console.log(res.affectedRows + " product inserted!\n");
    }
  );

  console.log(query.sql);
}
 });