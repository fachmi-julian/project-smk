const mongose = require('mongoose')
const Schema = mongose.Schema

const jurusanSchema = Schema({
    nama_jurusan:String,
    deskripsi_jurusan:String,
    image_jurusan:String,    
},{
    timestamps:true
})
module.exports = mongose.model('jurusan',jurusanSchema)