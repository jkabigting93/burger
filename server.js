var express = require("express");
var bodyParser = require("body-parser");
var exphbs = require("express-handlebars");
var path = require("path");

var app = express();
var PORT = process.env.PORT || 5000;

app.use(bodyParser.urlencoded({ extended: false }));

app.engine("handlebars", exphbs({
  defaultLayout: "main",
  layoutsDir: __dirname + "/views/layouts/"
}));
app.set("view engine", "handlebars");

app.use(express.static(path.join(__dirname, "public")))

var favicon = require("serve-favicon");
app.use(favicon(path.join(__dirname, "favicon.ico")));

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});

module.exports = app;