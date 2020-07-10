const express = require('express')
const Serie = require('../models/series.models')
const router = express.Router()

router.get('/series', (req, res, next) => {
  Serie.find({})
    .then((seriesFromDB) => {
      res.render('error', { seriesFromDB })
      console.log(seriesFromDB)
    })
    .catch((error) => console.log(error))
});

module.exports = router