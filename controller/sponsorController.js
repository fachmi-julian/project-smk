const sponsorSchema = require('../model/m_sponsor')
const cloudinary = require('cloudinary')

exports.tambahSponsor = async (req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        const sponsor = new sponsorSchema({
            nama_sponsor:req.body.nama_sponsor,
            image_sponsor:result.url,
            public_id:result.public_id
        })
        //console.log(slider)
        const data = sponsor.save()
        res.send(JSON.stringify("data berhasil di tambahkan"))                   
    })
    // const path = `/image/sponsor/${req.file.filename}`
    // const sponsor = new sponsorSchema({
    //     nama_sponsor:req.body.nama_sponsor,
    //     image_sponsor:path
    // })
    // const data = await sponsor.save()
    // res.send(JSON.stringify(data))    
}
exports.tampilSponsor = async(req,res) => {
    const data = await sponsorSchema.find()
    res.send(JSON.stringify(data))
}

exports.detailSponsor = async(req,res) => {
    const {id} = req.params
    const data = await sponsorSchema.findOne({_id:id},req.body)
        res.send(JSON.stringify(data))    
}

exports.editSponsor = async(req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        req.body.image_sponsor=result.url;
        req.body.public_id=result.public_id;         
        return req.body
    })
    .then((body) => {
        const data = sponsorSchema.updateOne({_id:req.params.id},{$set:body})
        return data
    })
    .then((data)=>{
        res.send(JSON.stringify("data berhasil di update"))
    })
    .catch(err => {
        res.send('update gagal')
    })
}

exports.hapusSponsor = async(req,res) => {
    const {id} = req.params
    const data = await sponsorSchema.deleteOne({_id:id},req.body)
    res.send(JSON.stringify("data berhasil di hapus"))
}