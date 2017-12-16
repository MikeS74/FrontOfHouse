var express = require("express");
var mysql = require("mysql");
var bodyParser = require("body-parser");
var path = require("path");
var app = express();
var port = process.env.PORT || 8000;
app.use(bodyParser.urlencoded({
    extended: false
}));
app.use(bodyParser.json());
app.use('/static', express.static(path.join(__dirname, 'app/public')));
require("./app/routing/htmlRoutes")(app);
app.use(bodyParser.urlencoded({ extended: false }));
var routes = require("./controllers/reviews_controller.js");
app.use("/", routes);
app.listen(port);
