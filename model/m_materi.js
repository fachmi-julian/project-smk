const mongoose = require('mongoose')
const Schema = mongoose.Schema

const materiSchema = Schema({
    id_jurusan:String,
    nama_materi:String
},{
    timastamps:true
})
module.exports = mongoose.model('materi',materiSchema)