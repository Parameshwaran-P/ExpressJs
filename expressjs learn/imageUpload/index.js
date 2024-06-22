const express = require('express')
// const bodyParser = require('body-parser')

const path = require('path')
const multer = require('multer')
const app = express()

app.set('views', path.join(__dirname, 'views'))
app.set('view engine','ejs')

const storage = multer.diskStorage({
    destination:(req, file, cb)=>{
        

        cb(null, 'uploads')
    },
    filename:(req, file, cb)=>{


     cb(null, file.originalname.replace(/\.[^/.]+$/,"")+'_'+Date.now()+path.extname(file.originalname))
    }


})

let maxSize = 2 * 1000 * 1000

let upload = multer({
    storage: storage,
    limits : {
        fileSize : maxSize
    },
    fileFilter: (req, file, cb)=>{
       let filetypes = /jpeg|jpg|png/;
       let mimetype = filetypes.test(file.mimetype)
       let extname = filetypes.test(path.extname(file.originalname).toLowerCase())

       if(mimetype && extname){
        return cb(null, true)
       }
       cb("Error: File upload only suports the following filetypes: "+filetypes) 
    }
}).single('mypic')

app.get('/', (req, res)=>{
    res.render('signup')
})

app.post('/upload',(req, res, next)=>{
upload(req, res, (err)=>{
    if(err){

        if (err instanceof multer.MulterError && err.code=='LIMIT_FILE_SIZE') {
           return res.send("file size maximum 2mb")
        }
        res.send(err)
    }else{
        res.send("Succes Image uploaded")
    }

})
})

app.listen(3000,()=>{
    console.log("server listning port 3000");
})