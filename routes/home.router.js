const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('home', {
    layout: 'index',
    titulo: 'Home',
    productos: []
  })
})

module.exports = router
