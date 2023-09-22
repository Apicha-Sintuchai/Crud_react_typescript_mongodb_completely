const mongoose = require('mongoose');

const Videochema = mongoose.Schema({
    
    file: String,
    Bookname:String,
    Bookdetail:String,
    BookPrice:String,
   
}, { timestamps: true })

module.exports = mongoose.model('Videohema',Videochema)
