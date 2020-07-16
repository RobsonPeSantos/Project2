const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const favicon = require("serve-favicon");
const hbs = require("hbs");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

// require database configuration
require("./config/configdb");

// Middleware Setup
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());

// Express View engine setup
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");
app.use(express.static(path.join(__dirname, "public")));
app.use(favicon(path.join(__dirname, "public", "images", "favicon.ico")));

// default value for title local
app.locals.title = "Projeto2";

const index = require("./routes/index.routes");
const series = require("./routes/series.routes");
const auth = require("./routes/auth.routes");

app.use("/", index);
app.use("/", series);
app.use("/", auth);

module.exports = app;
