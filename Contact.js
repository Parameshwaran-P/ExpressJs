const express = require('express')

const router = express.Router()

const Contact = router.get('/contact',(req, res)=>{
    res.send('This is Contact page')
})

module.exports = Contact;