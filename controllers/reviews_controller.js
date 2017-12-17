var express = require("express");
var router = express.Router();
var review = require("../models/review.js");
var restProf = require("../models/restprofile.js");

router.get("/", function(req, res) {
    review.selectAll(function(data) {
        var hbsObject = {
            reviews: data
        };
        res.render("index", hbsObject);
    });
});

//Route for inserting user review data into 'reviews' SQL table
router.post("/api/reviews", function(req, res) {
    review.insertOne(["api_id, user_id, user_name, business_name, business_loc, business_review, star_rating, overall_rating, pros, cons, suggestion_to_mgmt"], [req.body.api_id, req.body.user_id, req.body.user_name, req.body.business_name, req.body.business_loc, req.body.business_review, req.body.star_rating, req.body.overall_rating, req.body.pros, req.body.cons, req.body.suggestion_to_mgmt], function(result) {
        res.json({
            id: result.insertId
        });
    });
});

//Route for inserting 'current restaurant' for temp storage in SQL
router.post("/api/restprofile", function(req, res) {
    restProf.insertOne(["id, api_id, business_name, business_loc, customer_rating"], [req.body.id, req.body.api_id, req.body.business_name, req.body.business_loc, req.body.customer_rating], function(result) {
        res.json({
            id: result.insertId
        });
    });
});

//Route for grabbing temp restaurant data in SQL for multiple uses
router.get("/api/temp", function(req, res) {
    restProf.selectAll(function(result) {
        res.json([result[0].id, result[0].api_id, result[0].business_name, result[0].business_loc, result[0].customer_rating]);
        console.log("TEMP SQL PROFILE RESULTS " + result[0].api_id + " " + result[0].business_name + " " + result[0].business_loc);
    });
});

//Route for grabbing specific restaurant review data in SQL
router.get("/api/reviewsbyid", function(req, res) {
    review.selectAll(function(result) {
        res.json(result);
    });
});

//Clears out temp restaurant data
router.delete("/api/temp/:id", function(req, res) {
    var condition = "id=" + req.params.id;
    restProf.delete(condition, function(result) {
        if (result.affectedRows == 0) {
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});
module.exports = router;