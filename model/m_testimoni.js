const mongoose = require('mongoose')
const Schema = mongoose.Schema

const testiSchema = Schema({
    nama_alumni:String,
    deskripsi_testimoni:String,
    foto_alumni:String,
    public_id:String
},{
    timastamps:true
})
module.exports = mongoose.model('testimoni',testiSchema)