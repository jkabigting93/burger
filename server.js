var express = require("express");
var favicon = require('serve-favicon')
var bodyParser = require("body-parser");
var methodOverride = require("method-override");

var port = process.env.PORT || 5000;

var app = express();

app.use(express.static(process.cwd() + "/public"));
app.use(favicon(path.join(__dirname + "public/favicon.ico")))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(methodOverride("_method"));

var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller.js");

app.use("/", routes);

app.listen(PORT, function() {
  console.log("App now listening at localhost:" + PORT);
});