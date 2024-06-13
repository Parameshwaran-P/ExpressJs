const { json } = require('body-parser');
var express = require('express')
var router =express.Router();

var movies = [{
    id:1,
    name:'leo',
    year:2023,
    rating:9.8
},
{
    id:2,
    name:'karudan',
    year:2024,
    rating:9.1
},
{
    id:3,
    name:'kalvan',
    year:2024,
    rating:8.9
},
{
    id:4,
    name:'Ghili',
    year:2000,
    rating:9.9
}]

router.get('/',(req, res)=>{
res.json(movies)
})

router.post('/movie', (req, res) => {
    if (
        !req.body.name ||
        !req.body.year.toString().match(/^[0-9]{4}$/g) ||
        !req.body.rating.toString().match(/^[0-9]\.[0-9]$/g)
    ) {
        res.status(400);
        res.json({ message: "bad request" });
    } else {
        let newId = movies[movies.length - 1].id + 1;
        movies.push({
            id: newId,
            name: req.body.name,
            year: req.body.year,
            rating: req.body.rating
        });
        res.json({ message: "new movie inserted" });
    }
});

router.delete('/:id',(req, res)=>{
 const removeId = movies.findIndex(movie=>movie.id === req.params.id)
 if(removeId===-1){
   res.json({message:"movie not found"})
 }
 else{
    movies.splice(removeId, 1)
    res.json({message:"movie deleted"})
 }
})
module.exports=router