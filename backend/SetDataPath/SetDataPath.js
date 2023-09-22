const BookShema = require('../mongotable/mongoshema')
const Videohema = require('../mongotable/mongoshemaVideo')
const fs = require('fs')


exports.ReadAll = async (req,res) => {
   const GetData = await BookShema.find({}).exec()
   res.send(GetData)
}
exports.ReadOne = async (req,res) =>{
    const ID = req.params.id
    const GetDataById = await BookShema.findOne({_id:ID}).exec()
    res.send(GetDataById)
}
exports.post = async (req,res) =>{
    var data = req.body
    if(req.file){
        data.file = req.file.filename
    }
    const SendData = await BookShema(data).save()
    res.send(SendData)
   

}
exports.Update = async (req,res) =>{
    const formfrontend = req.body
    const ID = req.params.id
    const UpdateData = await BookShema.findOneAndUpdate({_id:ID},formfrontend, {new:true}).exec()
    res.send(UpdateData)

}
exports.Delete = async (req,res) =>{
    const id = req.params.id
    const removed = await BookShema.findOneAndDelete({_id:id}).exec()
    if(removed?.file){
        await fs.unlink('./Picsave/' + removed.file,(err) => {
            if(err)
            {
                console.log(err)
            }
            else{
                console.log("remove")
            }
        })
        res.send(removed)
    }
}

exports.Videopost = async (req,res) =>{
    var data = req.body
    if(req.file){
        data.file = req.file.filename
    }
    const SendData = await Videohema(data).save()
    res.send(SendData)

}

exports.key = async(req,res) => {
    res.send('kuy')
}