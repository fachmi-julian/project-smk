const sliderSchema = require('../model/m_slider')
const cloudinary = require('cloudinary')
//const cloud = require('../middleware/clodinaryConfig')
// const fs = require('fs')
// const { promisify } = require('util')

exports.tambahSlider = (req,res) => {    
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        const slider = new sliderSchema({
            judul_slider:req.body.judul_slider,
            image_slider:result.url,
            public_id:result.public_id
        })
        slider.save()
        res.send(JSON.stringify(slider))                   
    })
       
    
    // const slider = new sliderSchema({
    //     judul_slider:req.body.judul_slider,
    //     image_slider:result.url,            
    // })
    // const data = await slider.save()
    // res.send(JSON.stringify(data))
    
        
        // console.log(result.url)
        
    
    
    
    // console.log(req.file.path)
    // try {
    //     var imageSlider = {
    //         image_slider: req.body.image_slider,
    //       }
    //  //USING MONGO METHOD TO FINE IF IMAGE-NAME EXIST IN THE DB
    //       sliderSchema.find({image_slider:imageSlider.image_slider}, (err, callback) => {
    //  //CHECKING IF ERROR OCCURRED      
    //   if (err) {
    //         res.json({
    //                     err: err,
    //                     message: 'there was a problem uploading image'
    //     })
    //  } else if(callback.length >= 1 ) {
    //         res.json({
    //         message: 'file already exist'
    // })
    //  }else {
    //         var imageSlider = {
    //         imageName: req.body.imageName,
    //         cloudImage: req.files.path,
    // }
    //  // IF ALL THING GO WELL, POST THE IMAGE TO CLOUDINARY
    //  cloud.uploads(imageDetails.cloudImage).then((result) => {
    //  var imageDetails = {
    //  imageName: req.body.imageName,
    //  cloudImage: result.url,
    //  imageId: result.id
    //  }
    //  //THEN CREATE THE FILE IN THE DATABASE
    //  imageModel.create(imageDetails, (err, created)=> {
    //  if(err){
    //  res.json({
    //  err: err,
    //  message: 'could not upload image, try again'
    //  })
    //  }else {
    //  res.json({
    //  created: created,
    //  message: "image uploaded successfully!!"
    //  })
    //  }
    //  })
    //  })
    //  }
    //  });
    // } catch (error) {
        
    // }
    
}

exports.tampilSlider = async(req,res) => {
    const data = await sliderSchema.find()
    res.send(JSON.stringify(data))
}

exports.detailSlider = async (req,res) => {
    const {id} = req.params
    const data = await sliderSchema.findOne({_id:id},req.body)
    res.send(JSON.stringify(data))
}

exports.editSlider = async(req,res) => {
    cloudinary.v2.uploader.upload(req.file.path)
    .then((result) => {
        req.body.image_slider=result.url;
        req.body.public_id=result.public_id;         
        return req.body
    })
    .then((body) => {
        const data = sliderSchema.updateOne({_id:req.params.id},{$set:body})
        return data
    })
    .then((data)=>{
        res.send(JSON.stringify("data berhasil di update"))
    })
    .catch(err => {
        res.send('update gagal')
    })
}

exports.hapusSlider = async (req,res) => {
    const {id} = req.params
    const data = await sliderSchema.deleteOne({_id:id},req.body)
    res.send(JSON.stringify(`data berhasil di hapus`))
}