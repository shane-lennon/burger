var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
router.get("/", function(request, response) {
  burger.selectAll(function(data) {
    var handlebar = {
      burgers: data
    };
    console.log(handlebar);
    response.render("index", handlebar);
  });
});

router.post("/api/burgers", function(request, response) {
  burger.create([
    "name", "sleepy"
  ], [
    request.body.name, request.body.sleepy
  ], function(result) {
    // Send back the ID of the new quote
    response.json({ id: result.insertId });
  });
});

router.put("/api/burgers/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  console.log("condition", condition);

  burger.updateOne({
    sleepy: request.body.sleepy
  }, condition, function(result) {
    if (result.changedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

router.delete("/api/burgers/:id", function(request, response) {
  var condition = "id = " + request.params.id;

  burger.delete(condition, function(result) {
    if (result.affectedRows == 0) {
      // If no rows were changed, then the ID must not exist, so 404
      return response.status(404).end();
    } else {
      response.status(200).end();
    }
  });
});

// Export routes for server.js to use.
module.exports = router;