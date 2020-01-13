const testiSchema = require('../model/m_testimoni')
const cloudinary = require('cloudinary')

exports.tambahTestimoni = async (req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        const testimoni = new testiSchema({
            nama_alumni:req.body.nama_alumni,
            deskripsi_testimoni:req.body.deskripsi_testimoni,
            foto_alumni:result.url,
            public_id:result.public_id
        })        
        const data = testimoni.save()
        res.send(JSON.stringify("Data Berhasil di Simpan"))                   
    })

    // const testimoni = new testiSchema({
    //     nama_alumni:req.body.nama_alumni,
    //     deskripsi_testimoni:req.body.deskripsi_testimoni,
    //     foto_alumni:req.file.originalname
    // })
    // const data = await testimoni.save()
    // res.send(JSON.stringify(data))
}

exports.tampilTestimoni = async (req,res) => {
    const data = await testiSchema.find(req.body)
    res.send(JSON.stringify(data)) 
}

exports.detailTestimoni = async (req,res) => {
    const {id} = req.params
    const data = await testiSchema.findOne({_id:id},req.body)
    res.send(JSON.stringify(data))
}

exports.editTestimoni = async(req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        req.body.foto_alumni=result.url;
        req.body.public_id=result.public_id;         
        return req.body
    })
    .then((body) => {
        const data = testiSchema.updateOne({_id:req.params.id},{$set:body})
        return data
    })
    .then((data)=>{
        res.send(JSON.stringify("data berhasil di update"))
    })
    .catch(err => {
        res.send('update gagal')
    })
}
exports.hapusTestimoni = async(req,res) => {
    const {id} = req.params
    const data = await testiSchema.deleteOne({_id:id},req.body)
    res.send(JSON.stringify("data berhasil di hapus"))
}