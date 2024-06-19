const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../utils/path')


router.get('/add-pro',(req, res)=>{

    // res.send('<h1>Add products</h1><form action="http://localhost:5000/user/store-pro" method="POST"><input type="text" name="title"/><input type="submit" value="Submit"/></form>');
    res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
})
router.post('/add-pro',(req, res)=>{
res.send(req.body)
//    res.send('server loading');
console.log(req.body);
})

module.exports = router