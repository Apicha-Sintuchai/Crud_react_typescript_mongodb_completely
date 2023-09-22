const mongoose = require('mongoose');

const BookSchema = mongoose.Schema({
    Bookname:{
        type:String
    },
    Bookdetail:{
        type:String
    },
    BookPrice:{
        type:Number
    },
    file: String,
    shotstory:{
        type:String
    },
    Link:String,
    
    // BookUser:{
    //     type:String,
    //     default:'user'
    // }
}, { timestamps: true })

module.exports = mongoose.model('BookShema',BookSchema)
