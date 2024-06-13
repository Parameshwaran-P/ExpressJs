const express = require('express')

const router = express.Router()

const Error = router.get('*',(req, res)=>{
    res.send('This is page not found')
})

module.exports = Home;