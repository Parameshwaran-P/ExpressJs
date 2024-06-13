const express = require('express')

const router = express.Router()

const Skill = router.get('/skill',(req, res)=>{
    res.send('This is Skills page')
})

module.exports = Skill;