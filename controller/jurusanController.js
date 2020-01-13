const schemaJurusan = require('../model/m_jurusan')
const cloudinary = require('cloudinary')

exports.tambahJurusan = async (req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        const jurusan = new schemaJurusan({
            nama_jurusan:req.body.nama_jurusan,
            deskripsi_jurusan:req.body.deskripsi_jurusan,
            image_jurusan:result.url
        })        
        const data = jurusan.save()
        res.send(JSON.stringify(jurusan))                   
    })
    // const jurusan = new schemaJurusan({
    //     nama_jurusan:req.body.nama_jurusan,
    //     deskripsi_jurusan:req.body.deskripsi_jurusan,
    //     image_jurusan:req.file.originalname
    // })
    // const data = await jurusan.save()
    // res.send(JSON.stringify(data))
}

exports.tampilJurusan = async (req,res) => {
    const data = await schemaJurusan.find(req.body)
    res.send(JSON.stringify(data))
}

exports.detailJurusan = async (req,res) => {
    const {id} = req.params
    const data = await schemaJurusan.findOne({_id:id},req.body)
    res.send(JSON.stringify(data))
}