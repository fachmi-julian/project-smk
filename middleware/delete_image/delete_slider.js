//const fs = require('fs');
const admin = require('../../model/m_admin');
const cloudinary = require('cloudinary')

module.exports = {
  delete: async (req,res,next) => {
    cloudinary.config({
      cloud_name: 'ddyqecch9',
      api_key: '998688522633124',
      api_secret: 'Qr-edPCg7hlz7IeRtgZaevwVpGA'
    })
    const url = await admin.findById(req.params.id)
    const oldData = url.public_id
    cloudinary.v2.uploader.destroy(oldData)
    console.log(oldData)
    next() 
  },
  edit:async(req,res,next) => {
    cloudinary.config({
      cloud_name: 'ddyqecch9',
      api_key: '998688522633124',
      api_secret: 'Qr-edPCg7hlz7IeRtgZaevwVpGA'
      
    },
      cloudinary.v2.uploader.upload(req.file.path)
            .then((result) => {            
                const admin = new dmin({            
                    "nm_admin": req.body.nm_admin,                         
                    "email": req.body.email,
                    "password": req.body.password,                
                    "foto_admin":result.url,
                    "public_id":result.public_id                
                })
            })
    )
}
}
          
  


// module.exports = {
//   deleteFile: async (req, res, next) => {

//     const oldData = await slider.findById(req.params.id)
//     const oldImageUrl = `public/${oldData.image_slider}`;

//     fs.unlink(oldImageUrl, (err) => {
//       if (err) {
//         console.error(err);
//       }
//     });
//     next()
//   }  
// };