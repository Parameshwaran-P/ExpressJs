const express = require('express')

const routing = express.Router()
    routing.get('/:id',(req, res)=>{
     res.send(`hello world ${req.params.id}`)
    })

    routing.get('/paramesh/:id([0-9]{5})',(req, res)=>{
        res.send("Mr.Paramu"+ req.params.id)
       })
   

module.exports = routing;