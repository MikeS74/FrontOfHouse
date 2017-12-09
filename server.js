//Node and express requirements
var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var PORT = process.env.PORT || 3001;

//Parse incoming request bodies in middleware
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());

//Static file serving for images in public/img
app.use('/static', express.static(path.join(__dirname, 'app/public')));

//Routing access for api link
require("./app/routing/apiRoutes")(app);
require("./app/routing/htmlRoutes")(app);

//Server connection confirmation in node
app.listen(PORT, function() {
    console.log("App listening on PORT: " + PORT);
});

///////////////////////////////////////////////////////////////////////////////////////////

// var connection = mysql.createConnection({
//    host: "localhost",
//    port: 3306,
//    // Your username
//    user: "root",

//    // Your password
//    password: "",
//    database: "frontOfHouse",
//    multipleStatements: true

// });

// connection.connect(function(err) {
//   if (err) throw err;
//   console.log("connected as id " + connection.threadId + "\n");
//   createProduct();
    
    
// function createProduct() {
//  console.log("Inserting a new product...\n");
//  var query = connection.query(
//    "INSERT INTO reviews SET ?",
//    {
//      api_id: 300,
//      user_id: 6,
//      user_name: "Dave",
//        business_name: "Wal Mart",
//        business_review: "blalalalalalalalalalall",
//        star_rating: 4,
//        overall_rating: 3,
//        pros: "good lighting",
//        cons: "cockroaches",
//        suggestion_to_mgmt: "get rid of the cockroaches"
//    },
//    function(err, res) {
//      console.log(res.affectedRows + " product inserted!\n");
//    }
//  );

//  console.log(query.sql);
// }
// });