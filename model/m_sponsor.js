const mongoose = require('mongoose')
const Schema = mongoose.Schema

const sponsorSchema = Schema({
    nama_sponsor:String,
    image_sponsor:String,
    public_id:String
},{
    timestamps:true
})

module.exports = mongoose.model('sponsor',sponsorSchema)