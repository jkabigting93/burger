var express = require("express");
var router = express.Router();
var burger = require("../models/burger.js");

// Create routes and set logic
router.get("/", function(req, res) {
  burger.selectAll(function(data) {
    var hbsObject = {
      burgers: data
    };
    console.log(hbsObject);
    res.render("index", hbsObject);
  });
});

router.post("/burgers", function(req, res) {
  burger.insertOne(["burger_name", "devoured"], [req.body.burger_name, req.body.devoured], function(result) {
    res.redirect("/");
  });
});

router.put("/burgers/:id", function(req, res) {
  var condition = "id = " + req.params.id;
  console.log("condition", condition);
  burger.updateOne({
    devoured: true
  },
    condition, function(result) {
      if (result.changedRows === 0) {
        res.redirect("/");
      }
    }
  );
});

module.exports = router;