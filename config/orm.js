// Import MySQL connection.
var connection = require("./connection");

// Helper function to push ? into SQL syntax
// function printQuestionMarks(num) {
//   var arr = [];
//   for (var i = 0; i < num; i++) {
//     arr.push("?");
//   }
//   return arr.toString();
// };

// // Helper function to convert object key/value pairs to SQL syntax
// function objToSql(ob) {
//   var arr = [];

//   // loop through the keys to push to array
//   for (var key in ob) {
//     var value = ob[key];
//     if (Object.hasOwnProperty.call(ob, key)) {
//       if (typeof value === "string" && value.indexOf(" ") >= 0) {
//         value = "'" + value + "'";
//       }
//       arr.push(key + "=" + value);
//     }
//   }
//   return arr.toString();
// };

// Object for all our SQL statement functions.
var orm = {

  // selectAll()
  selectAll: function (tableInput, cb) {
    connection.query("SELECT * FROM " + tableInput + ";", function (err, result) {
        if (err) throw err;
        cb(result)
    })
  },

  // insertOne()
  insertOne: function (tableInput, val, cb) {
    connection.query("INSERT INTO " + tableInput + " (burger_name)VALUES('" + val + "'); ", function (err, result) {
        if (err) throw err;
        cb(result);
    })
  },

  // updateOne()
  updateOne: function (tableInput, condition, cb) {
    connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function (err, result) {
        if (err) throw err;
        cb(result);
    })
  },
};

// Export the orm object for the model
module.exports = orm;