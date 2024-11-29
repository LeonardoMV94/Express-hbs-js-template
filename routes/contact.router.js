const express = require('express')
const router = express.Router()

router.get('/', (req, res) => {
  res.render('contacto', {
    layout: 'index',
    titulo: 'Contacto'
  })
})

router.post('/', (req, res) => {
  const body = req.body
  console.log(body)
  res.status(201).render('gracias', {
    layout: 'index',
    titulo: 'Contacto'
  })
})

module.exports = router
