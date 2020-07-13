const express = require("express");
const Serie = require("../models/series.models");
const router = express.Router();

router.get("/", (req, res, next) => {
  Serie.find()
    .then((series) => {
      res.render("index", { series });
    })
    .catch((error) => console.log(error));
});

module.exports = router;