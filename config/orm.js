var connection = require("./connection.js");

// Object Relational Mapper (ORM)

// The ?? signs are for swapping out table or column names
// The ? signs are for swapping out other values
// These help avoid SQL injection
// https://en.wikipedia.org/wiki/SQL_injection
var orm = {
  selectAll: function(tableInput) {
    var queryString = "SELECT * FROM ??";
    connection.query(queryString, tableInput, function(error, result) {
      if (error) throw error;
      console.log(result);
    });
  },
  insertOne: function(tableInput, columns, values) {
    var queryString = "INSERT INTO ?? (??, ??) VALUES (?, ?)";
    console.log(queryString);
    connection.query(queryString, [tableInput, columns.toString(), values.toString()], function(error, result) {
      if (error) throw error;
      console.log(result);
    });
  },
  updateOne: function(tableInput, columns, values) {
    var queryString = "UPDATE ?? SET ?? = ? WHERE id = ?";
    console.log(queryString);
    connection.query(queryString, [tableInput, columns, values], function(error, result) {
      if (error) throw error;
      console.log(result);
    });
  }
};

module.exports = orm;