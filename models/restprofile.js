var orm = require("../config/orm.js");

var restProf = {
  selectAll: function(cb) {
    orm.selectAll("restprofile", function(res) {
      cb(res);
    });
  },
  insertOne: function(cols, vals, cb) {
    orm.insertOne("restprofile", cols, vals, function(res) {
      cb(res);
    });
  },
  updateOne: function(objColVals, condition, cb) {
    orm.updateOne("restprofile", objColVals, condition, function(res) {
      cb(res);
    });
  },
  delete: function(condition, cb) {
    orm.delete("restprofile", condition, function(res) {
      cb(res);
    });
  }
};

module.exports = restProf;