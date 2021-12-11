const express= require("express")
const cors=require('cors')
const booklist=require('./src/model/BookModel')
const bodyParser = require("body-parser")

const app= new express()

app.use(cors())
app.use(bodyParser.json())

app.get("",function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE")
    booklist.find()
    .then(function(book){
        res.send(book)
    })

})

app.post('/addbooks',function(req,res){
    res.header("Access-Control-Allow-Origin","*")
    res.header("Access-Control-Allow-Methods:GET,POST,PUT,DELETE")
    var books={
        Image:req.body.item.Image,
        Name:req.body.item.Name,
        Author:req.body.item.Author,
        Genre:req.body.item.Genre
    }
var book = new booklist(books)
book.save()
})

app.listen(3000)
