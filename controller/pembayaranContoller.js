const schemaPembayaran = require('../model/m_pembayaran')
const siswaschema = require('../model/m_siswa')

module.exports = {
    tambahPembayaran: async(req,res) => {
        const pembayaran = new schemaPembayaran({
            nis:req.body.nis,
            jenis_pembayaran:req.body.jenis_pembayaran,
            jumlah_pembayaran:req.body.jumlah_pembayaran,
            
        })        
        const data = await pembayaran.save()
        console.log(data)
        res.send(JSON.stringify(data))
    },
    tampilPembayaran: async(req,res) => {
        const data = await schemaPembayaran.find()
        res.send(JSON.stringify(data))
    },
    detailPembayaran: async(req,res) => {
        const {nis} = req.params
        const data = await schemaPembayaran.findOne({nis:nis})
        res.send(JSON.stringify(data))
    },
    hapusPembayaran: async(req,res) => {
        const {id} = req.params
        const data = await schemaPembayaran.findOne({_id:id})
        res.send(JSON.stringify(`data berhasil di hapus`))
    }



}