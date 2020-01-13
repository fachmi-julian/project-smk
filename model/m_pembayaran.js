const mongose = require('mongoose')
const Schema = mongose.Schema

const pembayaranSchema = Schema({
    nis:String,
    jenis_pembayaran:String,
    jumlah_pembayaran:Number,
        
},{
    timestamps:true
})
module.exports = mongose.model('pembayaran',pembayaranSchema)