const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const Userrouter = require('./routes/userRoute')
const shoproute = require('./routes/shoproute')
const path = require('path')
app.set('views-engine', 'pug')

app.use(bodyParser.urlencoded())
app.use('/user',Userrouter)
app.use(shoproute)
app.use((req, res)=>{
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'))
})

app.listen(5000,()=>{
    console.log("server listning port 5000");
}) 