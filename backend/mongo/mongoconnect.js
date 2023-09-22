const mongoose = require('mongoose');

const creatconnect = async () => {
    await mongoose.connect('mongodb://127.0.0.1:27017/Bookstore')
    console.log('mongoose connect')
    
}

module.exports = creatconnect