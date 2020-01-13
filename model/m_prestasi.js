const mongoose = require('mongoose')
const Schema = mongoose.Schema

const prestasiSchema = Schema({
    nama_prestasi:String,
    deskripsi_prestasi:String,
    image_prestasi:String,
    public_id:String
},{
    timestamps:true
})

module.exports = mongoose.model('prestasi',prestasiSchema)