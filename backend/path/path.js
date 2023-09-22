const express = require('express');
const { ReadAll,Delete,ReadOne,Update,post, Videopost, key } = require('../SetDataPath/SetDataPath');
const { upload } = require('../middleware/upload');
const { upload1 } = require('../middleware/upload1');
const path = express.Router()


path.get('/some',ReadAll)
path.get('/some1',key)
path.get('/some/:id',ReadOne)
path.post('/some',upload,post)
path.post('/filevideo',upload,Videopost)
path.put('/some/:id',upload,Update)
path.delete('/some/:id',Delete)

module.exports = path