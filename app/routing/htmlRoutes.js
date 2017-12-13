var path = require("path");

module.exports = function(app) {
    
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/index.html"));
    });
    
    app.get("/form", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/review.html"));
    });
    
    app.get("/restaurant", function(req, res) {
        res.sendFile(path.join(__dirname, "../public/restProfile.html"));
    });
    
    
    // app.get("*", function(req, res) {
    //     res.sendFile(path.join(__dirname, "../public/home.html"));
    // });
};