const schemaFasilitas = require('../model/m_fasilitas')
const cloudinary = require('cloudinary')

exports.tambahFasilitas = async (req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        const fasilitas = new schemaFasilitas({
            nama_fasilitas:req.body.nama_fasilitas,
            deskripsi_fasilitas:req.body.deskripsi_fasilitas,
            image_fasilitas:result.url,
            public_id:result.public_id
        })        
        const data = fasilitas.save()
        res.send(JSON.stringify(fasilitas))                   
    })
    // const fasilitas = new schemaFasilitas({
    //     nama_fasilitas:req.body.nama_fasilitas,
    //     deskripsi_fasilitas:req.body.deskripsi_fasilitas,
    //     image_fasilitas:req.file.originalname
    // })
    // const data = await fasilitas.save()
    // res.send(JSON.stringify(data))
}

exports.tampilFasilitas = async (req,res) => {
    const data = await schemaFasilitas.find(req.body)
    console.log(data)
    res.send(JSON.stringify(data))
}

exports.detailFasilitas = async(req,res) => {
    const {id} = req.params
    const data = await schemaFasilitas.findOne({_id:id},req.body)
        res.send(JSON.stringify(data))    
}

exports.editFasilitas = async(req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        req.body.image_fasilitas=result.url;
        req.body.public_id=result.public_id;         
        return req.body
    })
    .then((body) => {
        const data = schemaFasilitas.updateOne({_id:req.params.id},{$set:body})
        return data
    })
    .then((data)=>{
        res.send(JSON.stringify("data berhasil di update"))
    })
    .catch(err => {
        res.send('update gagal')
    })
}

exports.hapusFasilitas = async(req,res) => {
    const {id} = req.params
    const data = await sponsorSchema.deleteOne({_id:id},req.body)
    res.send(JSON.stringify("data berhasil di hapus"))
}