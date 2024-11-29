const express = require('express')
const authRouter = require('../routes/auth.router')
const contacRouter = require('../routes/contact.router')
const homeRouter = require('../routes/home.router')

const route = (app) => {
  const router = express.Router()
  app.use(router)
  // aqui van las rutas
  router.use('/', homeRouter)
  router.use('/auth', authRouter)
  router.use('/contacto', contacRouter)
}

module.exports = route
