const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const adminSchema = new Schema({
    nm_admin:String,
    email:String,
    password:String,
    foto_admin:String,
    public_id:String      
})

module.exports = mongoose.model('admin',adminSchema)