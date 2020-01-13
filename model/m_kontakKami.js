const mongoose = require('mongoose')
const Schema = mongoose.Schema

const KontakKamiSchema = Schema({
    nama_lengkap:String,
    email:String,
    pesan:String
},{
    timastamps:true
})
module.exports = mongoose.model('kontak_kami',KontakKamiSchema)