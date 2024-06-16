const express = require('express')

const app = express();
const router = require('./employee');
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer();

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended:true}))
app.use(upload.array())
app.use('/employee', router)
app.listen(3000, ()=>{
  console.log( "server listning port 3000");
})
