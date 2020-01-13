const mongoose = require('mongoose');
const Schema = mongoose.Schema

const sliderSchema = Schema({
    judul_slider:String,
    image_slider:String,
    public_id:String    
},{
    timestamps:true
})

module.exports = mongoose.model('slider', sliderSchema)