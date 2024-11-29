const path = require('node:path')
const express = require('express')
const routes = require('./controllers/index')
const { loggerHttpMethods, getCurrentPathBrowser, getYear } = require('./middlewares/logger')
const hbs = require('./lib/hbs')
const envVars = require('./config')

const app = express()
const port = envVars.port

// Sending static files with Express  comment
app.use('/public', express.static(path.join(__dirname, '/public')))

// Express Handlebars Configuration
app.engine('hbs', hbs.engine)
app.set('view engine', 'hbs')

// middlewares
app.use(express.json())
app.use(loggerHttpMethods)
app.use(getCurrentPathBrowser)
app.use(getYear)

// Configure Routes
routes(app)

app.listen(port, () => {
  console.clear()
  console.log(`Server starting in http://localhost:${port}/`)
})
