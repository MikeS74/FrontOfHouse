var orm = require("../config/orm.js");

var review = {
    selectAll: function(cb) {
        orm.selectAll("reviews", function(res) {
            cb(res);
        });
    },
    insertOne: function(cols, vals, cb) {
        orm.insertOne("reviews", cols, vals, function(res) {
            cb(res);
        });
    },
    updateOne: function(objColVals, condition, cb) {
        orm.updateOne("reviews", objColVals, condition, function(res) {
            cb(res);
        });
    },
    delete: function(condition, cb) {
        orm.delete("reviews", condition, function(res) {
            cb(res);
        });
    }
};

module.exports = review;