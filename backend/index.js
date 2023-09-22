const express = require('express');
const cors = require('cors');
const {readFileSync, readdirSync} = require('fs');
const path = require('./path/path.js');
const creatconnect = require('./mongo/mongoconnect.js');
const morgan = require('morgan');
const bodyParser = require('body-parser');

const app = express()
app.use(cors())
app.use(morgan('dev'))
app.use(bodyParser.json({limit:'10mb'}))
app.use('/Picsave', express.static('Picsave'))

creatconnect()   

readdirSync('./path').map((looppath) => app.use('/store', require('./path/' + looppath)))

const port = 1234
app.listen(port, () => {
    console.log("server running")
})
