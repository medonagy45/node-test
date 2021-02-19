const express = require("express");
const app = express();
var bodyParser = require("body-parser");

authors = require("./src/routers/authors.routes.js");
articles = require("./src/routers/articles.routes.js");

/* Default route */
app.get("/", (req, res) =>
  res.send("Hey! I am the entry of the API on the remote")
);

/* Configure the App to use body parser */
//increasing the size of request as creating a location is making exceptions
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(bodyParser.json());

/* Configure the App to use app-wide middlewares */
app.use(function (req, res, next) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Credentials", true);
  res.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "X-Requested-With, content-type, Authorization"
  );
  next();
});

/* Here you define all the routes */
app.use("/articles", articles);
app.use("/authors", authors);

/* Prepare the exported variable */
const configuredApp = app;

/* Export the configured app variable */
module.exports = configuredApp;
