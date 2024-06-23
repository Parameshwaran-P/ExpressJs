const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const exhbs = require('express-handlebars')
const dbo = require('./db')
const ObjectID = dbo.ObjectId


app.engine('hbs', exhbs.engine({layoutsDir:'views/', defaultLayout:'main', extname:"hbs"}))
app.set('view engine', 'hbs')
app.set('views', 'views')
app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json())

app.get('/',async (req, res)=>{

    let message = ''
    let edit_id, edit_book;

    
   let database = await dbo.getDatabase()
   const collection = database.collection('books');
   const curser=collection.find({})
   let book = await curser.toArray()
  

   if (req.query.edit_id) {
    edit_id = req.query.edit_id;
    edit_book =await collection.findOne({_id: new ObjectID(edit_id)})
   }

   switch (req.query.status){
    case '1':
        message = 'Inserted data successfully'
        break;

        default:
            break;
   }
   res.render('main',{message, book, edit_book, edit_id})})
app.post('/create_book',async (req, res)=>{
    let database = await dbo.getDatabase()
    const collection = database.collection('books')
    let book = {title: req.body.title, author: req.body.author}
    await collection.insertOne(book)
    return res.redirect('/?status=1')
})

app.listen(5000,()=>{
    console.log("server listning port 5000");
})