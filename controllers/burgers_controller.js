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
    res.render("./index", hbsObject);
  });
});

router.post("/burgers/insertOne", function (req, res) {
  burger.insertOne(req.body.burger_name, function (result) {
      console.log(result);
  });
});

router.put("/burgers/updateOne", function (req, res) {
  burger.updateOne(req.body.burger_id, function (result) {
      res.redirect("/");
    }
  )
});

module.exports = router;