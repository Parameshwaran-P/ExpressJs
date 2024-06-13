const express = require('express')

const router = express.Router()

const Home = router.get('/home',(req, res)=>{
    res.send('This is Home page')
})

module.exports = Home;