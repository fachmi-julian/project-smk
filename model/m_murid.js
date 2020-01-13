const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const muridSchema = Schema({
    nm_murid:String
})

module.exports = mongoose.model('murid',muridSchema)