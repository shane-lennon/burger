// Import the ORM to insertOne functions that will interact with the database.
var orm = require("../config/orm.js");

var burger = {
  selectAll: function(callback) {
    orm.selectAll("burgers", function(response) {
      callback(response);
    });
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals, callback) {
    orm.insertOne("burgers", cols, vals, function(response) {
      callback(response);
    });
  },
  updateOne: function(objColVals, condition, callback) {
    orm.updateOne("burgers", objColVals, condition, function(response) {
      callback(response);
    });
  }
};

// Export the database functions for the controller (burgersController.js).
module.exports = burger;