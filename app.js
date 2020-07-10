const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')
const express = require('express')
const hbs = require('hbs')
const path = require('path')
const mongoose = require('mongoose')

const app = express()
require('./config/configdb')

// Middleware Setu
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser())


app.set('views', path.join(__dirname, 'views'))
hbs.registerPartials(path.join(__dirname, '/views/partials/'))
app.set('view engine', 'hbs')
app.use(express.static(path.join(__dirname, 'public')))

// default value for title local
app.locals.title = 'PROJET2'

const index = require('./routes/index.routes')
app.use('/', index)

const series = require('./routes/series.routes')
app.use('/series', series);

module.exports = app