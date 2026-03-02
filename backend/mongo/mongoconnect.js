const mongoose = require('mongoose');
require('dotenv').config();

const creatconnect = async () => {
    await mongoose.connect(process.env.MONGO_URI)
    console.log('mongoose connect')
}

module.exports = creatconnect