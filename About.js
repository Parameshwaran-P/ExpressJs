const express = require('express')

const router = express.Router()

const About = router.get('/about',(req, res)=>{
    res.send('This is About page')
})

module.exports = About;