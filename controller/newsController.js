const schemaNews = require('../model/m_news')
const cloudinary = require('cloudinary')

exports.tambahNews = async (req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        const news = new schemaNews({
            judul_news:req.body.judul_news,
            deskripsi_news:req.body.deskripsi_news,
            author:req.body.author,
            image_news:result.url,
            public_id:result.public_id
        })        
        const data = news.save()
        res.send(JSON.stringify("Data Berhasil di Simpan"))                   
    })


    // const news = new schemaNews({
    //     judul_news:req.body.judul_news,
    //     deskripsi_news:req.body.deskripsi_news,
    //     author:req.body.author,
    //     image_news:req.file.originalname
    // })
    // const data = await news.save()
    // res.send(JSON.stringify(data))
    // console.log(data)
}

exports.tampilNews = async (req,res) => {
    const data = await schemaNews.find()
    res.send(JSON.stringify(data))
}

exports.detailNews = async (req,res) => {
    const {id} = req.params
    const data = await schemaNews.findOne({_id:id},req.body)
    res.send(JSON.stringify(data))
}

exports.editNews = async(req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        req.body.image_news=result.url;
        req.body.public_id=result.public_id;         
        return req.body
    })
    .then((body) => {
        const data = schemaNews.updateOne({_id:req.params.id},{$set:body})
        return data
    })
    .then((data)=>{
        res.send(JSON.stringify("data berhasil di update"))
    })
    .catch(err => {
        res.send('update gagal')
    })
}

exports.hapusNews = async(req,res) => {
    const {id} = req.params
    const data = await schemaNews.deleteOne({_id:id},req.body)
    res.send(JSON.stringify("data berhasil di hapus"))
}