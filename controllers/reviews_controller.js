var express = require("express");
var router = express.Router();
var review = require("../models/review.js");
var restProf = require("../models/restprofile.js");

//Route creation and setup
router.get("/", function(req, res) {
  review.selectAll(function(data) {
//Handlebars setup data
    var hbsObject = {
      reviews: data
    };
    res.render("index", hbsObject);
  });
});

router.post("/api/reviews", function(req, res) {
  review.insertOne([
    "api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt, date"
  ], [
      req.body.api_id, 
      req.body.user_id, 
      req.body.user_name, 
      req.body.business_name, 
      req.body.business_loc, 
      req.body.business_review, 
      req.body.star_rating, 
      req.body.overall_rating, 
      req.body.pros, 
      req.body.cons, 
      req.body.suggestion_to_mgmt, 
      req.body.date
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.post("/api/restprofile", function(req, res) {
  restProf.insertOne([
    "api_id, business_name, business_loc, customer_rating"
  ], [
      req.body.api_id, 
      req.body.business_name, 
      req.body.business_loc, 
      req.body.customer_rating
  ], function(result) {
    res.json({ id: result.insertId });
  });
});

router.get("/api/all", function(req, res) {
  restProf.selectAll(function(result) {
    res.json(result[0].api_id + " " + result[0].business_name + " " + result[0].business_loc);
        console.log("TEMP SQL PROFILE RESULTS " + result[0].api_id + " " + result[0].business_name + " " + result[0].business_loc);
  });
});



// router.put("/api/reviews/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   review.updateOne({
//     devoured: req.body.devoured
//   }, condition, function(result) {
//     if (result.changedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

// router.delete("/api/reviews/:id", function(req, res) {
//   var condition = "id = " + req.params.id;

//   review.delete(condition, function(result) {
//     if (result.affectedRows == 0) {
//       return res.status(404).end();
//     } else {
//       res.status(200).end();
//     }
//   });
// });

//Export router setup
module.exports = router;