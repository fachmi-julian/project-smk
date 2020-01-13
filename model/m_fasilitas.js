const mongoose = require('mongoose')
const Schema = mongoose.Schema

const fasilitasSchema = Schema({
    nama_fasilitas:String,
    deskripsi_fasilitas:String,
    image_fasilitas:String,
    public_id:String
},{
    timestamps:true
})

module.exports = mongoose.model('fasilitas',fasilitasSchema)