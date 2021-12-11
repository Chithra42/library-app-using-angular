const mongoose= require("mongoose")
mongoose.connect('mongodb+srv://userone:userone@chithra.mf7kl.mongodb.net/Book?retryWrites=true&w=majority')
const Schema=mongoose.Schema

const Book= new Schema({
    Image:String,
    Name:String,
    Author:String,
    Genre:String
})

const booklist= mongoose.model('book',Book)
module.exports=booklist;