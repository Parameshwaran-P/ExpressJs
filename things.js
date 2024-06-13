var express = require('express')

var router = express.Router();

router.get('/paramesh', (req, res)=>{
        res.send('Hi im paramesh')
    });
router.get('/:id',(req, res)=>{
        res.send(`hello world ${req.params.id}`)
       })

       router.get('*',(req, res)=>{
        res.send(`This page not found ${req.params.id}`)
       })
   
module.exports = router;