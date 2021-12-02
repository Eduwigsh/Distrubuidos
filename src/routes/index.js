const express = require('express');
const router = express.Router();
const controler = require('../controlador/index')
const { format } = require('morgan');
router.get('/', (req, res) => {

    res.render('index.html')
})
router.get('/somos', (req, res) => {
    res.render('somos.html')
})
router.get('/sabores', (req, res) => {

    res.render('sabobres.html')
})
router.get('/contacto', (req, res) => {
    res.render('contacto.html')
})
router.get('/login', (req, res) => {
    res.render('login.html')
})


module.exports = router