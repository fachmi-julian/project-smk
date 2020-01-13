const  schemaMateri = require('../model/m_materi')

exports.tambahMateri = async (req,res) => {
    const materi = new schemaMateri({
        id_jurusan:req.body.id_jurusan,
        nama_materi:req.body.nama_materi        
    })    
    const data = await materi.save()
    res.send(JSON.stringify(data))
}

exports.tampilMateri = async (req,res) => {
    const data = await schemaMateri.find()
    res.send(JSON.stringify(data))
}

exports.detailMateri = async (req,res) => {
    const {id} = req.params
    const data = await schemaMateri.findOne({_id:id},req.body)
    res.send(JSON.stringify(data))
}

exports.hapusMateri = async (req,res) => {
    const {id} = req.params
    const data = await schemaMateri.deleteOne({_id:id},req.body)
    res.send(JSON.stringify(`data berhasil di hapus`))
}

exports.editMateri = async (req,res) => {
    const {id} = req.params
    const data = await schemaMateri.updateOne({_id:id},req.body)
    res.send(JSON.stringify(data))
}