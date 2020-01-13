const mongoose = require('mongoose');
const Schema = mongoose.Schema;



const siswaSchema = new Schema({
    nis:String,
    nm_siswa:String,
    tempat_lahir:String,
    tgl_lahir:String,
    alamat:String,        
    email:String,
    password:String,
    no_telpon:String,
    foto_siswa:String,
    jurusan:String,
    public_id:String
        
})

module.exports = mongoose.model('siswa',siswaSchema)