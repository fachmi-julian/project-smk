const mongoose = require('mongoose')
const Schema = mongoose.Schema

const newsSchema = Schema({
    judul_news:String,
    deskripsi_news:String,
    author:String,
    image_news:String,
    public_id:String
},{
    timestamps:true
})
module.exports = mongoose.model('news',newsSchema)