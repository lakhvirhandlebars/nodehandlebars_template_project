var crteror = require("http-errors");
var express = require("express");
var path = require("path");
var indexRouter = require("./routes/index");
var usersRouter = require("./routes/users");
const hbs = require("express-handlebars");
const hbshelpers = require("handlebars-helpers");
const multihelpers = hbshelpers();

var app = express();
app.engine(
  "hbs",
  hbs({
    helpers: multihelpers,
    partialsDir: ["views/partials"],
    extname: ".hbs",
    layoutsDir: "views",
    defaultLayout: "layout"
  })
);
app.set("view engine", "hbs");
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use("/", indexRouter);
app.use("/users", usersRouter);

	// error find and handel
app.use(function(req, res, next) 
{
  next(crteror(404));
});
	// Eror solving start
app.use(function(err, req, res, next) 
{
	  res.locals.message = err.message;
	  res.locals.error = req.app.get("env") === "development" ? err : {};
	  res.status(err.status || 500);
	  res.render("error");
});
	// Eror solving end here
module.exports = app;
app.listen(3000, () => {
		console.log('Listening on port 3000...');
});