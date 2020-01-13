const modelPrestasi = require('../model/m_prestasi')
const cloudinary = require('cloudinary')

exports.tambahPrestasi = async (req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        const prestasi = new modelPrestasi({
            nama_prestasi:req.body.nama_prestasi,
            deskripsi_prestasi:req.body.deskripsi_prestasi,
            image_prestasi:result.url,
            public_id:result.public_id
        })
        //console.log(slider)
        const data = prestasi.save()
        res.send(JSON.stringify(prestasi))                   
    })
        
    // const prestasi = new modelPrestasi({
    //     nama_prestasi:req.body.nama_prestasi,
    //     deskripsi_prestasi:req.body.deskripsi_prestasi,
    //     image_prestasi:req.file.path
    // })
    // const data = await prestasi.save()
    // res.send(JSON.stringify(data))
}

exports.tampilPrestasi = async (req,res) => {
    const data = await modelPrestasi.find(req.body)
    res.send(JSON.stringify(data))
}

exports.detailPrestasi = async (req,res) => {
    const {id} = req.params
    const data = await modelPrestasi.findOne({_id:id},req.body)
    res.send(JSON.stringify(data))
}

exports.editPrestasi = async(req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        req.body.image_prestasi=result.url;
        req.body.public_id=result.public_id;         
        return req.body
    })
    .then((body) => {
        const data = modelPrestasi.updateOne({_id:req.params.id},{$set:body})
        return data
    })
    .then((data)=>{
        res.send(JSON.stringify("data berhasil di update"))
    })
    .catch(err => {
        res.send('update gagal')
    })
}

exports.hapusPrestasi = async(req,res) => {
    const {id} = req.params
    const data = await modelPrestasi.deleteOne({_id:id},req.body)
    res.send(JSON.stringify("data berhasil di hapus"))
}