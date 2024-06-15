var express = require('express')
var app = express()

// var vedha = require('./things.js')
// var priyan = require('./demo.js')

// var home = require('./Home.js')
// var about = require('./About.js')
// var contact = require('./Contact.js')
// var skill = require('./Skill.js')

// app.use(home)
// app.use(about)
// app.use(contact)
// app.use(skill)

// // app.use(priyan)
var bodyParser = require('body-parser')
var multer = require('multer')
var upload = multer()
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(upload.array())

var movies = require('./movies.js')

app.use('/movies',movies)
app.use('/movie',movies)
app.listen(5000, ()=>{
    console.log('server listning port 5000');
})


