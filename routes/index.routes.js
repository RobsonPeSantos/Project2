const express = require("express");
const Serie = require("../models/series.models");
const router = express.Router();

router.get('/', (req, res, next) => res.render('index'));

module.exports = router;

