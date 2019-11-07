var express = require("express");
var app = express();

var PORT = process.env.PORT || 5000;

app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({
  defaultLayout: "main",
  layoutsDir: __dirname + "/views/layouts/"
  })
);
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.set("PORT", PORT);
app.use("/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

module.exports = app;